import React, { ChangeEvent, useState } from "react";

import { Col, Modal, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

interface DateFilterModalProps {
  show: boolean;
  onClose: () => void;
  onSelected: (date_gte: string, date_lte: string) => void;
}

const KeywordModal: React.FC<DateFilterModalProps> = ({
  show,
  onClose,
  onSelected,
}: DateFilterModalProps) => {
  const [formData, setFormdata] = useState({
    date_gte: "",
    date_lte: "",
  });

  function handleInputChage(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;

    setFormdata({ ...formData, [name]: value });
  }

  const handleSelected = () => {
    onSelected(formData?.date_gte, formData?.date_lte);
  };

  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header>
        <Modal.Title>Período</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Row>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>De:</Form.Label>
              <Form.Control
                type="date"
                name="date_gte"
                onChange={handleInputChage}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Até:</Form.Label>
              <Form.Control
                type="date"
                name="date_lte"
                onChange={handleInputChage}
              />
            </Form.Group>
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="tertiary" onClick={onClose}>
          Cancelar
        </Button>
        <Button
          variant="primary"
          form="keyword-registration-form"
          type="submit"
          onClick={handleSelected}
        >
          Filtrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default KeywordModal;
