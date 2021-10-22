import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import {
  Container,
  HeaderButton,
  Title,
  ButtonsContainer,
  ProfileButton,
  PersonIcon,
  ProfileContainer,
  LogoImage,
  MyLink,
  UserButton,
  LogoutButton
} from "./styles";

import personIcon from "./../../assets/images/person.png";
import logoImage from "./../../assets/images/LogoPCT.png";

const Header: React.FC = () => {

  const history = useHistory();

  const userNome = localStorage.getItem('userNome');
  const isLoggedIn = true;
  
  const logout = () => {
    localStorage.clear();
    history.push("/");
  }

  return (
    <Container>
      <Title>
        <MyLink to="/"><LogoImage src={logoImage} /></MyLink>
      </Title>
      <ButtonsContainer>
        <HeaderButton>
          <MyLink to={"/"}>Início</MyLink>
        </HeaderButton>
        <HeaderButton>
          <MyLink to={"/"}>Pesquisa Avançada</MyLink>
        </HeaderButton>
        <HeaderButton>
          <MyLink to={"/"}>Sobre Nós</MyLink>
        </HeaderButton>
      </ButtonsContainer>
      <ProfileContainer>
        {isLoggedIn ? 
        (<UserButton>
          {/* Olá {userNome} - <MyLink onClick={logout}>Sair</MyLink> */}
          Olá, Cliente
          <LogoutButton onClick={logout}>Sair</LogoutButton> 
        </UserButton>) : 
        (<ProfileButton>
          <MyLink to="/login">Login <PersonIcon src={personIcon}/> </MyLink>
        </ProfileButton>)}
      </ProfileContainer>
    </Container>
  );
};

export default Header;
