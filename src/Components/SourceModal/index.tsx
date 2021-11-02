import React, { useState, ChangeEvent, FormEvent } from "react";
import { apiCrawlers } from "../../services/api";

import { Modal } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

interface SourceModalProps {
  show: boolean;
  handleClose: () => void;
  onCreated: () => void;
}

const SourceModal: React.FC<SourceModalProps> = ({
  show,
  handleClose,
  onCreated,
}: SourceModalProps) => {
  const [formData, setFormdata] = useState({
    source: "",
  });

  function handleInputChage(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;

    setFormdata({ ...formData, [name]: value });
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const { source } = formData;

    const data = new FormData();

    data.append("source", source);

    await apiCrawlers
      .post("/sources/", data)
      .then((response) => {
        console.log(response);
        handleClose();
        onCreated();
      })
      .catch((error) => {
        let msg = "Ocorreu um erro inesperado!";
        if (error.response.status === 400) {
          msg = "Esta fonte já foi cadastrada!";
        }
        alert(msg);
      });
  }

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header>
        <Modal.Title>Cadastro de fonte</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form id="source-registration-form" onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Fonte</Form.Label>
            <Form.Control
              type="text"
              name="source"
              id="source"
              onChange={handleInputChage}
              placeholder="Digite uma fonte"
            />
          </Form.Group>
          <Form.Text className="text-muted">
            Esta fonte será utilizada para filtrar documentos pelos crawlers
          </Form.Text>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="tertiary" onClick={handleClose}>
          Cancelar
        </Button>
        <Button
          variant="primary"
          form="source-registration-form"
          type="submit"
        >
          Cadastrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default SourceModal;
