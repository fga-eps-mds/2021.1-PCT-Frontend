import React from "react";

import { Container, Card } from "./styles";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";


const AboutUs: React.FC = () => {
  return (
    <Container>
      <Header />
        <Card></Card>
      <Footer />
    </Container>
  );
};

export default AboutUs;
