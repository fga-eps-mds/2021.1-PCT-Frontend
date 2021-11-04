import { Button, ButtonProps } from "react-bootstrap";
import React from "react";
import ReactDOM from "react-dom";
import { useHistory } from "react-router-dom";
import {
  Container,
  ResultDate,
  ResultTitle,
  TitleDateContainer,
  ResultDetails,
  MonitoringInfo,
  ResultDetailsInfo,
} from "./styles";
import moment from "moment";
import { FiArrowLeft } from "react-icons/fi";

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
          <MonitoringInfo>Status da Execução:</MonitoringInfo>
          <MonitoringInfo>Hora de Início:</MonitoringInfo>
          <MonitoringInfo>Hora de Término:</MonitoringInfo>
        </ResultDetails>
        <ResultDetailsInfo>
          <MonitoringInfo
            style={
              item.state == "SUCCESS"
                ? { color: "green", fontWeight: "bold" }
                : { color: "red", fontWeight: "bold" }
            }
          >
            {item.state}
            <br />
          </MonitoringInfo>
          <MonitoringInfo>
            {moment(item.start_datetime).format("DD/MM/YYYY hh:mm")}
          </MonitoringInfo>
          <MonitoringInfo>
            {moment(item.finish_datetime).format("DD/MM/YYYY hh:mm")}
          </MonitoringInfo>
        </ResultDetailsInfo>
      </TitleDateContainer>
      <br />
      <br />
      <br />
    </Container>
  );
};

export default MonitoringCard;
