import React, { useEffect, useState } from "react";

import SearchBar from "../../Components/SearchBar";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import ResultCard from "../../Components/ResultCard";

import Flatlist from "flatlist-react";
import Loader from "react-loader-spinner";

import { Container, NewResultsContainer } from "./styles";
import api from "../../services/api";

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

type DocumentsReponse = {
  count: number;
  next: string;
  previous: string;
  results: Array<documentResult>;
};

const Results: React.FC = () => {
  const [documentsReponse, setDocumentsResponse] = useState<DocumentsReponse>();
  const [isLoading, setIsLoading] = useState(false);

  const renderResultCard = (result: documentResult) => {
    return <ResultCard key={result?.id} item={result} />;
  };

  useEffect(() => {
    getDocuments();
    console.log("olá");
  }, []);

  const getDocuments = async () => {
    setIsLoading(true);
    try {
      const { data } = await api.get(``);
      setDocumentsResponse(data);
      console.log(data);
    } catch (error) {
      alert("Ocorreu um erro ao buscar os documentos!");
    }
    setIsLoading(false);
  };

  const getMoreDocuments = async () => {
    const { data } = await api.get<DocumentsReponse>(``);
    if (documentsReponse?.results) {
      let myDocuments: Array<documentResult> = documentsReponse?.results;
      myDocuments = [...myDocuments, ...data.results];

      const newDocumentsResponse = {
        ...documentsReponse,
        results: myDocuments,
      };

      setDocumentsResponse(newDocumentsResponse);
    }

    console.log(data);
  };

  return (
    <Container>
      <Header />
      <NewResultsContainer>
        <p>Últimas Atualizações</p>
        <SearchBar />
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
            list={documentsReponse?.results}
            renderItem={(item: documentResult) => renderResultCard(item)}
            renderWhenEmpty={() => <div>List is empty!</div>}
            hasMoreItems={documentsReponse?.next === null ? false : true}
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
