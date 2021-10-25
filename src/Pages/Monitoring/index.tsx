import React, { useEffect, useState } from "react";
import Loader from "react-loader-spinner";
import Api from "../../services/scrappers";
import MonitoringCard from "../../Components/MonitoringCard";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import { MyFlatlist } from "../HomeScreen/styles";
import {
    Container,
    NewResultsContainer,
    NewsTitle,
} from "./styles";



interface documentResult {
    id: number;
    scraper_execution_group: number;
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

type documentsResponse = {
    count: number;
    next: string;
    previous: string;
    results: Array<documentResult>;
  };

const Monitoring: React.FC = () => {
    const [documentsResponse, setDocumentsResponse] =
        useState<documentsResponse>();
    const [isLoading, setIsLoading] = useState(false);
    const [mySearch, setMySearch] = useState("");

    useEffect(() => {
        getStatus();
        console.log("olá");
    }, []);
    
    const getStatus = async () => {
        setIsLoading(true);
        try {
            const { data } = await Api.get(`/api/scrapers/2/executions/`);
            setDocumentsResponse(data);
            console.log(data);
        } catch (error) {
            alert("Ocorreu um erro ao buscar os documentos!");
        }
        setIsLoading(false);
    };

    const renderResultCard = (result: documentResult) => {
        return <MonitoringCard key={result?.task_id} item={result} />;
    };

    return(
        <Container>
            <Header />
            <h1>Últimas Atualizações</h1>
            <NewResultsContainer>
                {isLoading === true ? (
                    <Loader
                        type="ThreeDots"
                        color="#004346"
                        height={50}
                        width={50}
                    />
                ) : (
                    <MyFlatlist
                        list={documentsResponse?.results}
                        renderItem={(item: documentResult) => renderResultCard(item)}                       
                    />
                )}
            </NewResultsContainer>

            <Footer />
        </Container>
    );
}
export default Monitoring;
