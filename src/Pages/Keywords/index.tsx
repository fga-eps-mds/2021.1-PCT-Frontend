import React, { useEffect, useState } from "react";

import Flatlist from "flatlist-react";
import Loader from "react-loader-spinner";
import Button from "react-bootstrap/Button";

import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import KeywordItem, { KeywordResult } from "../../Components/KeywordItem";
import KeywordModal from "../../Components/KeywordModal";

import { Container, NewResultsContainer, Title } from "./styles";

import { apiCrawlers } from "../../services/apiCrawlers";

type keywordsResponse = {
  count: number;
  next: string;
  previous: string;
  results: Array<KeywordResult>;
};

const Keywords: React.FC = () => {
  const [keywordsResponse, setKeywordsResponse] = useState<keywordsResponse>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    document.title = "Expressões";
  }, []);

  useEffect(() => {
    getKeywords();
  }, []);

  const getKeywords = async () => {
    setIsLoading(true);
    try {
      const { data } = await apiCrawlers.get(`api/keywords/`);
      setKeywordsResponse(data);
    } catch (error) {
      alert("Ocorreu um erro ao buscar as expressões-chave!");
    }
    setIsLoading(false);
  };

  const getMoreKeywords = async () => {
    const { data } = await apiCrawlers.get<keywordsResponse>(
      `${keywordsResponse?.next}`
    );
    if (keywordsResponse?.results) {
      let myDocuments: Array<KeywordResult> = keywordsResponse?.results;
      myDocuments = [...myDocuments, ...data.results];

      const newKeywordsResponse = {
        count: data.count,
        next: data.next,
        previous: data.previous,
        results: myDocuments,
      };

      setKeywordsResponse(newKeywordsResponse);
    }
  };

  const renderResultCard = (result: KeywordResult) => {
    return (
      <KeywordItem key={result?.id} item={result} onDelete={getKeywords} />
    );
  };

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShowModal = () => setShow(true);

  return (
    <>
      <KeywordModal
        show={show}
        handleClose={handleClose}
        onCreated={getKeywords}
      />
      <Container>
        <Header />
        <Title>
          <h2>Expressões de Busca</h2>
        </Title>
        <Button variant="primary" onClick={handleShowModal}>
          Adicionar expressão
        </Button>
        <NewResultsContainer>
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
                />
              }
            />
          )}
        </NewResultsContainer>
        <Footer />
      </Container>
    </>
  );
};

export default Keywords;
