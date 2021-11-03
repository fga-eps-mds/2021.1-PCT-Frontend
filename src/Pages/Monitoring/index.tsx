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



interface monitoringResult {
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
}

interface monitoringResultDetails {
    id: number;
    crawler: number;
    task_name: string;
    start_datetime: string;
    finish_datetime: string;
    state: string;
    crawler_executions: Array<monitoringResultDetailsExecution>;
}

interface monitoringResultDetailsExecution {
    id: number;
    crawler_execution_group: number;
    task_id: string;
    task_name: string;
    start_datetime: string;
    finish_datetime: string;
    keyword: string;
    state: string;
    crawled_pages: number;
    saved_records: number;
    error_log?: any;
}

type monitoringResponse = {
    count: number;
    next: string;
    previous: string;
    results: Array<monitoringResult>;
};

type monitoringDetailsResponse = {
count: number;
next: string;
previous: string;
results: Array<monitoringResultDetails>;
};

const Monitoring: React.FC = () => {
    const [monitoringResponse, setMonitoringResponse] =
        useState<monitoringResponse>();
    // const [monitoringResponseDetails, setMonitoringResponseDetails] =
    // useState<monitoringDetailsResponse>();
    
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        getCrawlers();
        // getCrawlersDetails();
    }, []);
    
    const getCrawlers = async () => {
        setIsLoading(true);
        try {
            const { data } = await apiCrawlers.get(`crawlers`);
            console.log(data)
            // const idCrawler = data.results.id;
            setMonitoringResponse(data);
        } catch (error) {
            alert("Ocorreu um erro ao buscar os documentos!");
        }
        setIsLoading(false);
    };

    // const getCrawlersDetails = async () => {
    //     try {       
    //         const { data } = await apiCrawlers.get(`crawlers/${id}/executions`);
    //         monitoringResultDetailsExecution(data);
    //     } catch (error) {
    //         alert("Ocorreu um erro ao buscar os detalhes do crawlers!");
    //     }
    // };

    const renderResultCard = (result: monitoringResult) => {
        return <MonitoringCard key={result?.id} item={result} />;
    };

    // const renderResultCardDetails = (resultDetails: monitoringResultDetails) => {
    //     return <MonitoringCard key={resultDetails?.crawler} item={resultDetails} />;
    // };

    return(
        <Container>
            <Header />
            <NewResultsContainer>
            <h1>Sites em Monitoramento</h1>
                {isLoading === true ? (
                    <Loader
                        type="ThreeDots"
                        color="#004346"
                        height={50}
                        width={50}
                    />
                ) : (
                    <MyFlatlist
                        list={monitoringResponse?.results}
                        renderItem={(item: monitoringResult) => renderResultCard(item)}                       
                    > 
                        {/* <MyFlatlist list={monitoringResponse?.results}
                        renderItem={(item: monitoringResultDetails) => renderResultCardDetails(item)}   >
                        </MyFlatlist> */}
                    </MyFlatlist>
                )}
            </NewResultsContainer>

            <Footer />
        </Container>
    );
}
export default Monitoring;
