import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import { Button, ButtonToolbar, Container, Nav, Navbar } from "react-bootstrap";

import {
  Title,
  PersonIcon,
  LogoImage,
  UserButton,
  CustomNavDropdown,
  NavItem,
  MyLink,
} from "./styles";

import personIcon from "./../../assets/images/person.png";
import logoImage from "./../../assets/images/LogoPCT.png";

const Header: React.FC = () => {
  const history = useHistory();

  const userNome = localStorage.getItem("userNome");
  const isLoggedIn = true;

  const logout = () => {
    localStorage.clear();
    history.push("/");
  };

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
        <Navbar.Collapse id="pcts-navbar" style={{}}>
          <Nav
            style={{ width: "100%", padding: 0 }}
            className="justify-content-sm-end"
          >
            <NavItem>
              <MyLink to={"/sobre-nos"}>Sobre Nós</MyLink>
            </NavItem>
            {isLoggedIn ? (
              <>
                <NavItem>
                  <UserButton>Olá, Usuário</UserButton>
                </NavItem>
                <NavItem>
                  <Button variant="outline-primary">Sair</Button>
                </NavItem>
              </>
            ) : (
              <NavItem>
                <Button>
                  <MyLink to="/login">
                    Login <PersonIcon src={personIcon} />{" "}
                  </MyLink>
                </Button>
              </NavItem>
            )}
            {/* <MyLink to={""}>
              <CustomNavDropdown title="Gerenciamento" id="management-nav-dropdown">
                <CustomNavDropdown.Item>
                    <MyLink to={"/expressoes"}>Expressões</MyLink>
                </CustomNavDropdown.Item>
                <CustomNavDropdown.Item>
                    <MyLink to={"/fontes"}>Fontes</MyLink>
                </CustomNavDropdown.Item>
              </CustomNavDropdown>
            </MyLink> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
