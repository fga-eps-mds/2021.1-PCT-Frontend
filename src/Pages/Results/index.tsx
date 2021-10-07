import React, { useEffect, useState } from "react";

import SearchBar from "../../Components/SearchBar";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import ResultCard from "../../Components/ResultCard";

import Flatlist from "flatlist-react";
import Loader from "react-loader-spinner";

import { Container, NewResultsContainer } from "./styles";
import api from "../../services/api";
import { useRouteMatch } from "react-router";

interface documentResult {
  id: number;
  source: string;
  url: string;
  slug: string;
  title: string;
  content: string;
  checksum: string;
  updated_at: string;
  created_at: string;
}

type documentsResponse = {
  count: number;
  next: string;
  previous: string;
  results: Array<documentResult>;
};

interface ResultsParams {
  searchTerm: string;
}

const Results: React.FC = () => {
  const [documentsResponse, setDocumentsResponse] =
    useState<documentsResponse>();
  const [isLoading, setIsLoading] = useState(false);
  // const [mySearch, setMySearch] = useState("");

  const { params } = useRouteMatch<ResultsParams>();

  useEffect(() => {
    getDocuments();
  }, []);

  const getDocuments = async () => {
    setIsLoading(true);
    try {
      const { data } = await api.get(`?q=${params.searchTerm}`);
      setDocumentsResponse(data);
      console.log(data);
    } catch (error) {
      alert("Ocorreu um erro ao buscar os documentos!");
    }
    setIsLoading(false);
  };

  const getMoreDocuments = async () => {
    const { data } = await api.get<documentsResponse>(
      `${documentsResponse?.next}`
    );
    console.log(
      "nova chamada: ",
      await api.get<documentsResponse>(`${documentsResponse?.next}`)
    );
    if (documentsResponse?.results) {
      let myDocuments: Array<documentResult> = documentsResponse?.results;
      myDocuments = [...myDocuments, ...data.results];

      const newDocumentsResponse = {
        count: data.count,
        next: data.next,
        previous: data.previous,
        results: myDocuments,
      };

      setDocumentsResponse(newDocumentsResponse);
    }

    console.log(data);
  };

  const renderResultCard = (result: documentResult) => {
    return <ResultCard key={result?.id} item={result} />;
  };

  return (
    <Container>
      <Header />
      <NewResultsContainer>
        <p>Resultados</p>
        {/* <SearchBar
          ableToSearch={mySearch === "" ? false : true}
          searchTerm={mySearch}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setMySearch(e.target.value);
          }}
        /> */}
        {isLoading === true ? (
          <Loader
            type="ThreeDots"
            color="#004346"
            height={50}
            width={50}
            // timeout={1000} //3 secs
          />
        ) : (
          <Flatlist
            list={documentsResponse?.results}
            renderItem={(item: documentResult) => renderResultCard(item)}
            renderWhenEmpty={() => (
              <div>
                <h2>Não foi possível encontrar resultados!</h2>
              </div>
            )}
            hasMoreItems={documentsResponse?.next === null ? false : true}
            loadMoreItems={() => getMoreDocuments()}
            paginationLoadingIndicator={
              <Loader
                type="ThreeDots"
                color="#004346"
                height={50}
                width={50}
                // timeout={1000} //3 secs
              />
            }
          />
        )}
      </NewResultsContainer>
      <Footer />
    </Container>
  );
};

export default Results;
