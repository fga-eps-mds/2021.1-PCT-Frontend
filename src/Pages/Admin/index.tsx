import React, { useEffect } from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";

import { Container, Title } from "./styles";
import { Card, CardGroup, Col, Row } from "react-bootstrap";

const AdminPage: React.FC = () => {
  useEffect(() => {
    document.title = "PCTs - Admin";
  }, []);

  return (
    <Container>
      <Header />
      <Title>Gerenciamento de Conteúdo</Title>
      <CardGroup>
        <Row className="g-2">
          <Col md={3}>
            <Card>
              <Card.Body>
                <Card.Title>Fontes</Card.Title>
                <Card.Text>
                  Gerenciamento de expressões e palavras chaves que são
                  utilizadas para extração de dados das fontes.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card>
              <Card.Body>
                <Card.Title>Expressões</Card.Title>
                <Card.Text>
                  Gerenciamento de expressões e palavras chaves que são
                  utilizadas para extração de dados das fontes.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </CardGroup>
      <Footer />
    </Container>
  );
};

export default AdminPage;
