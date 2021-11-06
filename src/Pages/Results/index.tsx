import React, { useEffect, useState } from "react";

import SearchBar from "../../Components/SearchBar";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import ResultCard from "../../Components/ResultCard";

import Flatlist from "flatlist-react";
import Loader from "react-loader-spinner";

import { Container as PageContainer, NewResultsContainer } from "./styles";
import { api, apiCrawlers } from "../../services/api";
import { useRouteMatch } from "react-router";
import { Form, Row, Col } from "react-bootstrap";

import { SourceResult } from "../../Components/SourceItem";

import SelectFilter from "../../Components/SelectFilter";
import { listenerCount } from "process";
import { kMaxLength } from "buffer";

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
  classification: string;
}

type DocumentsResponse = {
  count: number;
  next: string;
  previous: string;
  results: Array<DocumentResult>;
};

type SourcesResponse = {
  count: number;
  next: string;
  previous: string;
  results: Array<SourceResult>;
};

interface ResultsParams {
  searchTerm: string;
}

const Results: React.FC = () => {
  const [documentsResponse, setDocumentsResponse] =
    useState<DocumentsResponse>();
  const [availableSources, setAvailableSources] = useState<SourceResult[]>();
  const [availableCategories] = useState([
    { id: 1, categoryName: "Quilombolas" },
    { id: 2, categoryName: "Território" },
    { id: 3, categoryName: "Conflito" },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const { params } = useRouteMatch<ResultsParams>();
  const [searchTerm, setSearchTerm] = useState(params.searchTerm);
  const [selectedSource, setSelectedSource] = useState<string>();
  const [selectedCategory, setSelectedCategory] = useState<string>();

  useEffect(() => {
    document.title = "Resultado";
  }, []);

  useEffect(() => {
    getDocuments();
    getSources();
  }, []);

  useEffect(() => {
    getDocuments();
  }, [selectedSource, selectedCategory]);

  const getDocuments = async () => {
    setIsLoading(true);
    try {
      let filters = `?q=${searchTerm}`;
      filters += selectedSource ? `&source=${selectedSource}` : "";
      filters += selectedCategory ? `&category=${selectedCategory}` : "";

      const { data } = await api.get(filters);
      setDocumentsResponse(data);
    } catch (error) {
      alert("Ocorreu um erro ao buscar os documentos!");
    }
    setIsLoading(false);
  };

  const getSources = async () => {
    let sources: SourceResult[] = [];

    let { data } = await apiCrawlers.get<SourcesResponse>(`crawlers/`);

    sources = sources.concat(data["results"]);

    // Recupera o restante das fontes pela paginacao
    while (data["next"]) {
      data = await getMoreSources(data);
      sources = sources.concat(data["results"]);
    }

    setAvailableSources(sources);
  };

  const getMoreSources = async (currentSourcesResponse: SourcesResponse) => {
    const { data } = await apiCrawlers.get<SourcesResponse>(
      `${currentSourcesResponse.next}`
    );
    return data;
  };

  const getMoreDocuments = async () => {
    const { data } = await api.get<DocumentsResponse>(
      `${documentsResponse?.next}`
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
  };

  const renderResultCard = (result: DocumentResult) => {
    return <ResultCard key={result?.id} item={result} />;
  };

  const filterSource = (source: SourceResult) => {
    setSelectedSource(source?.site_name);
  };

  const filterCategory = (category: any) => {
    setSelectedCategory(category["categoryName"]);
  };

  return (
    <PageContainer>
      <Header />
      <NewResultsContainer>
        <h2 className="results-title">Resultados</h2>
        <Row style={{ width: "80%", marginBottom: "20px" }}>
          <SearchBar
            ableToSearch={searchTerm === "" ? false : true}
            searchTerm={searchTerm}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setSearchTerm(e.target.value);
            }}
          />
          <Row className="justify-content-md-left">
            <Col sm lg="2" style={{ padding: "0px", paddingRight: "0.5vh" }}>
              <SelectFilter
                items={availableSources}
                idAttr="id"
                displayAttr="site_name_display"
                defaultItem="Todas as fontes"
                onSelect={filterSource}
              />
            </Col>
            <Col sm lg="2" style={{ padding: "0px", paddingRight: "0.5vh" }}>
              <SelectFilter
                items={availableCategories}
                idAttr="id"
                displayAttr="categoryName"
                defaultItem="Todas categorias"
                onSelect={filterCategory}
              />
            </Col>
            <Col sm lg="3" style={{ padding: "0px", paddingRight: "0.5vh" }}>
              <Form.Select id="source-filter" aria-label="Categoria" size="sm">
                <option>Qualquer momento</option>
                <option value="1">Semana passada</option>
                <option value="2">Mês passado</option>
                <option value="3">Ano passado</option>
                <option value="4">Customizado</option>
              </Form.Select>
            </Col>
          </Row>
        </Row>

        {isLoading === true ? (
          <Loader type="ThreeDots" color="#004346" height={50} width={50} />
        ) : (
          <>
            <p>
              {documentsResponse?.count
                ? `${documentsResponse?.count} registros encontrados`
                : ""}
            </p>
            <Flatlist
              list={documentsResponse?.results}
              renderItem={(item: DocumentResult) => renderResultCard(item)}
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
                />
              }
            />
          </>
        )}
      </NewResultsContainer>
      <Footer />
    </PageContainer>
  );
};

export default Results;
