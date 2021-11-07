import React, { useEffect } from "react";

import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import { Container, Title, AdminItemCard, MyLink } from "./styles";
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
            <MyLink to="/fontes">
              <AdminItemCard>
                <Card.Body>
                  <Card.Title>Fontes</Card.Title>
                  <Card.Text>
                    Websites utilizados como fonte de conteúdo.
                  </Card.Text>
                </Card.Body>
              </AdminItemCard>
            </MyLink>
          </Col>
          <Col md={3}>
            <MyLink to="/expressoes">
              <AdminItemCard>
                <Card.Body>
                  <Card.Title>Expressões</Card.Title>
                  <Card.Text>
                    Expressões e palavras chaves que são utilizadas para
                    extração de dados das fontes.
                  </Card.Text>
                </Card.Body>
              </AdminItemCard>
            </MyLink>
          </Col>
        </Row>
      </CardGroup>
      <Footer />
    </Container>
  );
};

export default AdminPage;
