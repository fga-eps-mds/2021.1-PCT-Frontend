import React from "react";

import {
  Container,
  HeaderButton,
  Title,
  ButtonsContainer,
  ProfileButton,
  PersonIcon,
  ProfileCotainer,
} from "./styles";
import personIcon from "./../../assets/images/person.png";

const Header: React.FC = () => {
  return (
    <Container>
      <Title>Projeto PCT</Title>
      <>
        <ButtonsContainer>
          <HeaderButton>Início</HeaderButton>
          <HeaderButton>Busca Avançada</HeaderButton>
          <HeaderButton>Sobre Nós</HeaderButton>
        </ButtonsContainer>
        <ProfileCotainer>
          <ProfileButton>
            Login <PersonIcon src={personIcon} />{" "}
          </ProfileButton>
        </ProfileCotainer>
      </>
    </Container>
  );
};

export default Header;
