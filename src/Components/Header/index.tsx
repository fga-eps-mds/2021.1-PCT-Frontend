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
} from "./styles";
import personIcon from "./../../assets/images/person.png";
import logoImage from "./../../assets/images/LogoPCT.png";

const Header: React.FC = () => {
  return (
    <Container>
      <Title>
        <LogoImage src={logoImage} />
      </Title>
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
