import React, { useEffect, useState } from "react";

import api from "../../services/api";

import SearchBar from "../../Components/SearchBar";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import MyCarousel from "../../Components/Carousel";
import ResultCard from "../../Components/ResultCard";

import Flatlist from "flatlist-react";
import Loader from "react-loader-spinner";

import { Container, NewResultsContainer } from "./styles";

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

const HomeScreen: React.FC = () => {
  const [documentsReponse, setDocumentsResponse] = useState<DocumentsReponse>();
  const [isLoading, setIsLoading] = useState(false);

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

  const renderResultCard = (result: documentResult) => {
    return <ResultCard key={result?.id} />;
  };

  return (
    <Container>
      <Header />
      <MyCarousel />
      <SearchBar />
      <NewResultsContainer>
        <p>Últimas Atualizações</p>
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
        {/* {newResults.map((i) => (
          <ResultCard key={i} />
        ))} */}
      </NewResultsContainer>
      <Footer />
    </Container>
  );
};

export default HomeScreen;
