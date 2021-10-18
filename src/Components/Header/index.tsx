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

  const [user, setUser] = useState({});

  const history = useHistory();

  // const isLoggedIn = localStorage.getItem('@user');
  const isLoggedIn = true;
  
  const logout = () => {
    localStorage.clear();
    history.push("/");
  }


  // useEffect(() => {
  //   setUser(JSON.parse(localStorage.getItem('@user')))
  //   }, []);
  

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
          {/* Olá {user.nome} - <MyLink onClick={logout}>Sair</MyLink> */}
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
