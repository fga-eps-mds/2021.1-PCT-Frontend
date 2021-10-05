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
          <HeaderButton>
            <p onClick={() => alert("teste")}>Início</p>
          </HeaderButton>
          <HeaderButton>
            <p onClick={() => alert("teste")}>Busca Avançada</p>
          </HeaderButton>
          <HeaderButton>
            <p onClick={() => alert("teste")}>Sobre Nós</p>
          </HeaderButton>
        </ButtonsContainer>
        <ProfileCotainer>
          <ProfileButton onClick={() => alert("teste")}>
            Login <PersonIcon src={personIcon} />
          </ProfileButton>
        </ProfileCotainer>
      </>
    </Container>
  );
};

export default Header;
