import React from "react";

import { Container } from "./styles";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import TelaCadastro from "../../Components/SignUp";

const SignUp: React.FC = () => {
  return (
    <Container>
      <Header />
      <TelaCadastro />
      <Footer />
    </Container>
  );
};

export default SignUp;
