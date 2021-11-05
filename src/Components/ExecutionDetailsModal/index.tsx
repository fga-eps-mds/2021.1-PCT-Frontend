import React, { useState } from "react";
import Flatlist from "flatlist-react";

import {
  crawlerExecutionResponse,
  crawlerExecutionDetailsResponse,
} from "../../Components/MonitoringCard";

import { Modal } from "react-bootstrap";
import Button from "react-bootstrap/Button";

import ExecutionDetailItem from "../ExecutionDetailItem";

interface ExecutionDetailsModalProps {
  show: boolean;
  handleClose: () => void;
  executionGroup?: crawlerExecutionResponse;
}

const ExecutionDetailsModal: React.FC<ExecutionDetailsModalProps> = ({
  show,
  handleClose,
  executionGroup,
}: ExecutionDetailsModalProps) => {
  const renderExecutionDetail = (
    executionDetail: crawlerExecutionDetailsResponse
  ) => {
    return (
      <ExecutionDetailItem key={executionDetail?.id} item={executionDetail} />
    );
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header>
        <Modal.Title>Coletas (expressões)</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Flatlist
          list={executionGroup?.crawler_executions}
          renderItem={(item: crawlerExecutionDetailsResponse) =>
            renderExecutionDetail(item)
          }
          renderWhenEmpty={() => (
            <div>
              <h2>Não foi possível encontrar resultados!</h2>
            </div>
          )}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="tertiary" onClick={handleClose}>
          Voltar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ExecutionDetailsModal;
