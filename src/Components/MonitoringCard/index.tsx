import React from "react";
import {
  Container,
  TitleDateContainer,
  ResultDetails,
  MonitoringInfo,
  ResultDetailsInfo,
} from "./styles";
import moment from "moment";

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
  dropped_records: number;
  error_log?: any;
}

interface MonitoringCardProps {
  item: crawlerExecutionResponse;
  onClick: (sourceItem: crawlerExecutionResponse) => void;
}

const MonitoringCard: React.FC<MonitoringCardProps> = ({ item, onClick }) => {
  return (
    <Container onClick={() => onClick(item)} style={{ cursor: "pointer" }}>
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
            {moment(item.start_datetime).format("DD/MM/YYYY HH:mm")}
          </MonitoringInfo>
          <MonitoringInfo>
            {moment(item.finish_datetime).format("DD/MM/YYYY HH:mm")}
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
