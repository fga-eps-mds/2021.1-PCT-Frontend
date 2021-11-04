import React, { useEffect, useState } from "react";
import Loader from "react-loader-spinner";
import { apiCrawlers } from "../../services/api";
import MonitoringCard from "../../Components/MonitoringCard";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import { MyFlatlist } from "../HomeScreen/styles";
import {
    Container,
    NewResultsContainer,
    NewsTitle,
} from "./styles";
import { useHistory, useRouteMatch } from "react-router-dom";

import { crawlerExecutionResponse, crawlerExecutionDetailsResponse } from "../../Components/MonitoringCard"
import { FiArrowLeft } from "react-icons/fi";
import { Button } from "react-bootstrap";

type crawlerResponse = {
    id: number;
    scraper_execution_group: number;
    site_name_display: string;
    task_enabled: boolean;
    allowed_domains: string;
    allowed_paths: string;
    task_id: string;
    task_name: string;
    start_datetime: Date;
    finish_datetime: Date;
    keyword: string;
    status: number;
    scraped_pages: number;
    saved_records: number;
    dropped_records: number;
    error_log?: any;
};

type crawlerAllExecutionsResponse = {
    count: number;
    next: string;
    previous: string;
    results: Array<crawlerExecutionResponse>;
};

interface monitoringParams {
    sourceID: string;
}

const Monitoring: React.FC = () => {
    const [crawlerResponse, setCrawlerResponse] =
        useState<crawlerResponse>();

    const [monitoringAllExecutionResponse, setMonitoringAllExecutionResponse] =
        useState<crawlerAllExecutionsResponse>();

    const [isLoading, setIsLoading] = useState(false);

    const { params } = useRouteMatch<monitoringParams>();
    const [sourceID, setSourceID] = useState(params.sourceID);

    useEffect(() => {
        getCrawlersExecutions();
        getCrawlerDetail();
    }, []);
    
    const getCrawlerDetail = async () => {
        try {
            const { data } = await apiCrawlers.get(`crawlers/${sourceID}/`);
            console.log(data)
            setCrawlerResponse(data);
        } catch (error) {
            alert("Ocorreu um erro ao buscar os documentos!");
        }
    };

    const getCrawlersExecutions = async () => {
        setIsLoading(true);
        try {
            const { data } = await apiCrawlers.get(`crawlers/${sourceID}/executions`);
            console.log(data)
            setMonitoringAllExecutionResponse(data);
        } catch (error) {
            alert("Ocorreu um erro ao buscar os detalhes dos documentos!");
        }
        setIsLoading(false);
    };

    const renderResultCard = (result: crawlerExecutionResponse) => {
        return <MonitoringCard key={result?.id} item={result} />;
    };

    const history = useHistory();
    const backToCrawlers = (e: React.SyntheticEvent) => {
        history.push(`/fontes`); 
    };

    return(
        <Container>
            <Header />
            <NewResultsContainer>
            <h1>Monitoramento do {crawlerResponse?.site_name_display}</h1>
                {isLoading === true ? (
                    <Loader
                        type="ThreeDots"
                        color="#004346"
                        height={50}
                        width={50}
                    />
                ) : ( monitoringAllExecutionResponse?.results.length!=0 ? 
                    <MyFlatlist
                        list={monitoringAllExecutionResponse?.results}
                        renderItem={(item: crawlerExecutionResponse) => renderResultCard(item)} />
                        :
                        <NewResultsContainer>   
                            <p> Nenhuma execução encontrada. </p>
                            <Button onClick={backToCrawlers}>
                                <FiArrowLeft /> Voltar para fontes
                            </Button>
                        </NewResultsContainer>
                )}
            </NewResultsContainer>

            <Footer />
        </Container>
    );
}
export default Monitoring;
