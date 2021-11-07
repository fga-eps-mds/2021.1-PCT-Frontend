import React from "react";
import { ButtonProps, Col, Row } from "react-bootstrap";
import moment from "moment";

import { crawlerExecutionDetailsResponse } from "../../Components/MonitoringCard";

import {
  Container,
  TitleDateContainer,
  ResultDetails,
  MonitoringInfo,
  ResultDetailsInfo,
} from "./styles";

interface ExecutionDetailItemProps extends ButtonProps {
  item: crawlerExecutionDetailsResponse;
}

const ExecutionDetailItem: React.FC<ExecutionDetailItemProps> = ({ item }) => {
  const openModal = () => {
    return true;
  };

  return (
    <Container onClick={() => openModal()}>
      <TitleDateContainer>
        <ResultDetails>
          <MonitoringInfo>Expressão:</MonitoringInfo>
          <MonitoringInfo>Status:</MonitoringInfo>
          <MonitoringInfo>Início:</MonitoringInfo>
          <MonitoringInfo>Término:</MonitoringInfo>
          <MonitoringInfo>Registros salvos:</MonitoringInfo>
          <MonitoringInfo>Descartados:</MonitoringInfo>
        </ResultDetails>
        <ResultDetailsInfo>
          <MonitoringInfo>{item.keyword}</MonitoringInfo>
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
          <MonitoringInfo>
            {item?.saved_records ? item?.saved_records : 0}
          </MonitoringInfo>
          <MonitoringInfo>
            {item?.dropped_records ? item?.dropped_records : 0}
          </MonitoringInfo>
        </ResultDetailsInfo>
      </TitleDateContainer>
    </Container>
  );
};

export default ExecutionDetailItem;
