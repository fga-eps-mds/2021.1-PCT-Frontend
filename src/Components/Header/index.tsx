import React from "react";

import {
  Container,
  HeaderButton,
  Title,
  ButtonsContainer,
  ProfileButton,
  PersonIcon,
  ProfileCotainer,
  LogoImage,
  MyLink,
} from "./styles";

import personIcon from "./../../assets/images/person.png";
import logoImage from "./../../assets/images/LogoPCT.png";

const Header: React.FC = () => {
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
      <ProfileCotainer>
        <ProfileButton>
          <MyLink to="/login">Login <PersonIcon src={personIcon}/> </MyLink>
        </ProfileButton>
      </ProfileCotainer>
    </Container>
  );
};

export default Header;
