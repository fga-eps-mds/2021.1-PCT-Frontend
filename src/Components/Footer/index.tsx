import React from "react";

import {
  Container,
  Copyright,
  CopyrightContainer,
  FooterButtons,
  FooterButtonsContainer,
} from "./styles";

import unbLogo from "../../assets/images/unbLogo.png";
import fbLogo from "../../assets/images/facebook.png";
import email from "../../assets/images/email.png";
import skype from "../../assets/images/logoSkype.png";
import { useHistory } from "react-router-dom";


const Footer: React.FC = () => {
  
  const history = useHistory();
  
  const adminpage = () => {
    history.push("/admin");
  }

  return (
    <Container>
      <CopyrightContainer>
        <Copyright onClick={adminpage}>@2021</Copyright>
        <Copyright>Povos e Comunidades Tradicionais</Copyright>
      </CopyrightContainer>
      <FooterButtonsContainer>
        <a href="skype:novacartografia?call">
          <FooterButtons src={skype} />
        </a>
        <a href="https://www.facebook.com/PNCSA"> 
          <FooterButtons src={fbLogo} />
        </a>
        <a href="http://novacartografiasocial.com/contate-nos/"> 
          <FooterButtons src={email} />
        </a>
        <FooterButtons src={unbLogo} />
      </FooterButtonsContainer>
    </Container>
  );
};

export default Footer;
