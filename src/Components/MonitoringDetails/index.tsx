import { ButtonProps } from "react-bootstrap";
import React from 'react'
import ReactDOM from 'react-dom'
import {
    Container,
    ResultDate,
    TitleDateContainer,
    ResultDetails,
  } from "./styles";

export interface crawlerExecutionResponse {
  id: number;
  crawler: number;
  task_name: string;
  start_datetime: string;
  finish_datetime: string;
  state: string;
  crawler_executions: Array<crawlerExecutionDetailsResponse>;
}

export interface crawlerExecutionDetailsResponse {
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


interface MonitoringCardProps extends ButtonProps {
    item: crawlerExecutionResponse;
}

const MonitoringCard: React.FC<MonitoringCardProps> = ({ item }) => {

    return (
        <Container>
          <TitleDateContainer>
            <ResultDetails>
              Status da Execução: {item.state}<br />
              Hora de Início: {item.start_datetime}<br />
              Hora de Término: {item.finish_datetime}<br />  
            </ResultDetails>
          </TitleDateContainer>
        </Container>
      );
    };
    
    export default MonitoringCard;