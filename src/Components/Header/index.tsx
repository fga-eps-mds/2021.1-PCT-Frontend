import React from "react";

import {
  HeaderButton,
  Title,
  LogoImage,
  MyLink,
  CustomNavDropdown,
} from "./styles";

import logoImage from "./../../assets/images/LogoPCT.png";
import { Container, Nav, Navbar } from "react-bootstrap";

const Header: React.FC = () => {
  return (
    <Navbar bg="light" expand="lg" style={{ width: "100%" }}>
      <Container style={{ maxWidth: "none" }}>
        <Navbar.Brand style={{ maxWidth: "200px" }}>
          <MyLink to={"/"}>
            <Title>
              <LogoImage src={logoImage} />
            </Title>
          </MyLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav style={{ width: "100%", justifyContent: "space-around" }}>
            <Nav.Link>
              <MyLink to={"/"}>Início</MyLink>
            </Nav.Link>
            <Nav.Link>
              <MyLink to={"/"}>Pesquisa Avançada</MyLink>
            </Nav.Link>
            <Nav.Link>
              <MyLink to={"/sobre-nos"}>Sobre Nós</MyLink>
            </Nav.Link>
            <MyLink to={""}>
              <CustomNavDropdown title="Gerenciamento" id="management-nav-dropdown">
                <CustomNavDropdown.Item>
                  <HeaderButton>
                    <MyLink to={"/keywords"}>Expressões</MyLink>
                  </HeaderButton>
                </CustomNavDropdown.Item>
                <CustomNavDropdown.Item>
                  <HeaderButton>
                    <MyLink to={"/sources"}>Fontes</MyLink>
                  </HeaderButton>
                </CustomNavDropdown.Item>
              </CustomNavDropdown>
            </MyLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
