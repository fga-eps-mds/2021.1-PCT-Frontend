import { ButtonProps } from "react-bootstrap";
import React from 'react'
import ReactDOM from 'react-dom'
import {
    Container,
    ResultDate,
    ResultTitle,
    TitleDateContainer,
    ResultDetails,
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

interface MonitoringCardProps extends ButtonProps {
    item: monitoringResult;
}

const MonitoringCard: React.FC<MonitoringCardProps> = ({ item }) => {

    return (
        <Container>
          <TitleDateContainer>
            <ResultDate>{item.site_name_display}</ResultDate> <br /><br />
            <ResultDetails>
              Site: {item.allowed_domains}<br />
              Crawler Ativo: {item.task_enabled}<br />  
              Pasta Acessada: {item.allowed_paths}<br /> 
            </ResultDetails>
          </TitleDateContainer>
        </Container>
      );
    };
    
    export default MonitoringCard;