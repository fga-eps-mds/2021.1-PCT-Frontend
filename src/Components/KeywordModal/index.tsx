import React, { useState, ChangeEvent, FormEvent } from "react";
import { apiCrawlers } from "../../services/apiCrawlers";

import { Modal } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

interface KeywordModalProps {
  show: boolean;
  handleClose: () => void;
  onCreated: () => void;
}

const KeywordModal: React.FC<KeywordModalProps> = ({
  show,
  handleClose,
  onCreated,
}: KeywordModalProps) => {
  const [formData, setFormdata] = useState({
    keyword: "",
  });

  function handleInputChage(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;

    setFormdata({ ...formData, [name]: value });
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const { keyword } = formData;

    const data = new FormData();

    data.append("keyword", keyword);

    await apiCrawlers
      .post("api/keywords/", data)
      .then(() => {
        handleClose();
        onCreated();
      })
      .catch((error) => {
        let msg = "Ocorreu um erro inesperado!";
        if (error.response.status === 400) {
          msg = "Esta expressão já foi cadastrada!";
        }
        alert(msg);
      });
  }

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header>
        <Modal.Title>Cadastro de expressão-chave</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form id="keyword-registration-form" onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Expressão</Form.Label>
            <Form.Control
              type="text"
              name="keyword"
              id="keyword"
              onChange={handleInputChage}
              placeholder="Digite uma expressão-chave"
            />
          </Form.Group>
          <Form.Text className="text-muted">
            Esta expressão será utilizada para filtrar documentos pelos crawlers
          </Form.Text>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="tertiary" onClick={handleClose}>
          Cancelar
        </Button>
        <Button
          variant="primary"
          form="keyword-registration-form"
          type="submit"
        >
          Cadastrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default KeywordModal;
