import React, { useEffect, useState } from "react";

import Flatlist from "flatlist-react";
import Loader from "react-loader-spinner";
import Button from "react-bootstrap/Button";

import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import SourceItem, { SourceResult } from "../../Components/SourceItem";
import SourceModal from "../../Components/SourceModal";

import { Container, NewResultsContainer, Title } from "./styles";

import { apiCrawlers } from "../../services/api";

type SourcesResponse = {
  count: number;
  next: string;
  previous: string;
  results: Array<SourceResult>;
};

const Sources: React.FC = () => {
  const [SourcesResponse, setSourcesResponse] = useState<SourcesResponse>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    document.title = "Fontes";
  }, []);

  useEffect(() => {
    getSources();
  }, []);

  const getSources = async () => {
    setIsLoading(true);
    try {
      const { data } = await apiCrawlers.get(`/crawlers/`);
      setSourcesResponse(data);
      console.log(data);
    } catch (error) {
      alert("Ocorreu um erro ao buscar as expressões-chave!");
    }
    setIsLoading(false);
  };

  const getMoreSources = async () => {
    const { data } = await apiCrawlers.get<SourcesResponse>(
      `${SourcesResponse?.next}`
    );
    if (SourcesResponse?.results) {
      let myDocuments: Array<SourceResult> = SourcesResponse?.results;
      myDocuments = [...myDocuments, ...data.results];

      const newSourcesResponse = {
        count: data.count,
        next: data.next,
        previous: data.previous,
        results: myDocuments,
      };

      setSourcesResponse(newSourcesResponse);
    }

    console.log(data);
  };

  const [showModal, setShowModal] = useState(false);
  const [isUpdateModal, setIsUpdateModal] = useState(false);
  const handleClose = () => {
    setShowModal(false);
    setIsUpdateModal(false);
  };
  const handleShowModal = () => setShowModal(true);
  const [selectedSource, setSelectedSource] = useState<SourceResult>();

  const handleShowModalUpdate = (sourceItem: SourceResult) => {
    console.log("Abrir modal UPDATE: ", sourceItem);
    setSelectedSource(sourceItem);
    setIsUpdateModal(true);
    setShowModal(true);
  };

  const renderResultCard = (sourceItem: SourceResult) => {
    return (
      <SourceItem
        key={sourceItem?.id}
        item={sourceItem}
        onDelete={getSources}
        onClick={handleShowModalUpdate}
      />
    );
  };

  return (
    <>
      <SourceModal
        showModal={showModal}
        isUpdateModal={isUpdateModal}
        handleClose={handleClose}
        onDataUpdated={getSources}
        source={selectedSource}
      />
      <Container>
        <Header />
        <Title>
          <h2>Fontes de Documentos</h2>
        </Title>
        <Button variant="primary" onClick={handleShowModal}>
          Adicionar fonte
        </Button>
        <NewResultsContainer>
          {isLoading === true ? (
            <Loader type="ThreeDots" color="#004346" height={50} width={50} />
          ) : (
            <Flatlist
              list={SourcesResponse?.results}
              renderItem={(item: SourceResult) => renderResultCard(item)}
              renderWhenEmpty={() => (
                <div>
                  <h2>Não foi possível encontrar resultados!</h2>
                </div>
              )}
              hasMoreItems={SourcesResponse?.next === null ? false : true}
              loadMoreItems={() => getMoreSources()}
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

export default Sources;
