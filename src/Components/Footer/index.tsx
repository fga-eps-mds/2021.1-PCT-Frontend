import React from "react";

import {
  Container,
  Copyright,
  CopyrightContainer,
  FooterButtons,
  FooterButtonsContainer,
} from "./styles";

import unbLogo from "../../assets/images/unbLogo.png";

const Footer: React.FC = () => {
  return (
    <Container>
      <CopyrightContainer>
        <Copyright> @2021 </Copyright>
        <Copyright> Povos e Comunidades Tradicionais</Copyright>
      </CopyrightContainer>
      <FooterButtonsContainer>
        <FooterButtons src={unbLogo} />
      </FooterButtonsContainer>
    </Container>
  );
};

export default Footer;
