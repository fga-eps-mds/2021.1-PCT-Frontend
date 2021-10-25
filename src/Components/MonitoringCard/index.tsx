import { ButtonProps } from "react-bootstrap";
import React from 'react'
import ReactDOM from 'react-dom'
import {
    Container,
    ResultDate,
    ResultTitle,
    TitleDateContainer,
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

interface MonitoringCardProps extends ButtonProps {
    item: documentResult;
}

const MonitoringCard: React.FC<MonitoringCardProps> = ({ item }) => {

    return (
        <Container>
          <TitleDateContainer>
            <ResultTitle>Extração dos sites</ResultTitle>
            <ResultDate>{item.task_name}</ResultDate>
            <ResultDate>{item.status}</ResultDate>
          </TitleDateContainer>
        </Container>
      );
    };
    
    export default MonitoringCard;