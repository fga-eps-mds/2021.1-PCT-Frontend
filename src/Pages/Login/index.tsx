import React from "react";

import { Container } from "./styles";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import TelaLogin from "../../Components/Login";

const Login: React.FC = () => {
  return (
    <Container>
      <Header />
      <TelaLogin />
      <Footer />
    </Container>
  );
};

export default Login;
