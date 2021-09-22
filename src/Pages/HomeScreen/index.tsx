import React from "react";

import { Container } from "./styles";

import SearchBar from "../../Components/SearchBar";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import MyCarousel from "../../Components/Carousel";

const HomeScreen: React.FC = () => {
  return (
    <Container>
      <Header />
      <MyCarousel />
      <SearchBar />
      <Footer />
    </Container>
  );
};

export default HomeScreen;
