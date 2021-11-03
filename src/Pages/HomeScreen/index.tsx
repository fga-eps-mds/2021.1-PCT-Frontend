import React, { useEffect, useState } from "react";
import api from "../../services/api";
import SearchBar from "../../Components/SearchBar";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import MyCarousel from "../../Components/Carousel";
import ResultCard from "../../Components/ResultCard";

import Loader from "react-loader-spinner";

import {
  Container,
  MyFlatlist,
  NewResultsContainer,
  NewsTitle,
} from "./styles";

interface DocumentResult {
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
  results: Array<DocumentResult>;
};

const HomeScreen: React.FC = () => {
  const [documentsResponse, setDocumentsResponse] =
    useState<documentsResponse>();
  const [isLoading, setIsLoading] = useState(false);
  const [mySearch, setMySearch] = useState("");


  useEffect(() => {
    document.title = "PCTs";
  }, []);

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
    const { data } = await api.get<documentsResponse>(
      `${documentsResponse?.next}`
    );
    console.log(
      "nova chamada: ",
      await api.get<documentsResponse>(`${documentsResponse?.next}`)
    );
    if (documentsResponse?.results) {
      let myDocuments: Array<DocumentResult> = documentsResponse?.results;
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

  const renderResultCard = (result: DocumentResult) => {
    return <ResultCard key={result?.id} item={result} />;
  };

  return (
    <Container>
      <Header />
      <MyCarousel />
      <SearchBar
        ableToSearch={mySearch === "" ? false : true}
        searchTerm={mySearch}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setMySearch(e.target.value);
        }}
      />
      <NewsTitle>Últimas Atualizações</NewsTitle>
      <NewResultsContainer>
        {isLoading === true ? (
          <Loader
            type="ThreeDots"
            color="#004346"
            height={50}
            width={50}
            // timeout={1000} //3 secs
          />
        ) : (
          <MyFlatlist
            list={documentsResponse?.results}
            renderItem={(item: DocumentResult) => renderResultCard(item)}
            renderWhenEmpty={() => (
              <div>Não foi possível encontrar resultados!</div>
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

export default HomeScreen;
