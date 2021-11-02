import React, { useEffect, useState } from "react";

import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import KeywordItem from "../../Components/KeywordItem";

import Flatlist from "flatlist-react";
import Loader from "react-loader-spinner";

import { Container, NewResultsContainer } from "./styles";
import { apiCrawlers } from "../../services/api";

interface KeywordResult {
  id: number;
  keyword: string;
  created_at: string;
}

type keywordsResponse = {
  count: number;
  next: string;
  previous: string;
  results: Array<KeywordResult>;
};

const Results: React.FC = () => {
  const [keywordsResponse, setKeywordsResponse] = useState<keywordsResponse>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getKeywords();
  }, []);

  const getKeywords = async () => {
    setIsLoading(true);
    try {
      const { data } = await apiCrawlers.get(`/keywords`);
      setKeywordsResponse(data);
      console.log(data);
    } catch (error) {
      alert("Ocorreu um erro ao buscar as expressões-chave!");
    }
    setIsLoading(false);
  };

  const getMoreKeywords = async () => {
    const { data } = await apiCrawlers.get<keywordsResponse>(
      `${keywordsResponse?.next}`
    );
    console.log(
      "nova chamada: ",
      await apiCrawlers.get<keywordsResponse>(`${keywordsResponse?.next}`)
    );
    if (keywordsResponse?.results) {
      let myDocuments: Array<KeywordResult> = keywordsResponse?.results;
      myDocuments = [...myDocuments, ...data.results];

      const newDocumentsResponse = {
        count: data.count,
        next: data.next,
        previous: data.previous,
        results: myDocuments,
      };

      setKeywordsResponse(newDocumentsResponse);
    }

    console.log(data);
  };

  const renderResultCard = (result: KeywordResult) => {
    return <KeywordItem key={result?.id} item={result} />;
  };

  return (
    <Container>
      <Header />
      <NewResultsContainer>
        <p>Keywords</p>
        {isLoading === true ? (
          <Loader type="ThreeDots" color="#004346" height={50} width={50} />
        ) : (
          <Flatlist
            list={keywordsResponse?.results}
            renderItem={(item: KeywordResult) => renderResultCard(item)}
            renderWhenEmpty={() => (
              <div>
                <h2>Não foi possível encontrar resultados!</h2>
              </div>
            )}
            hasMoreItems={keywordsResponse?.next === null ? false : true}
            loadMoreItems={() => getMoreKeywords()}
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
