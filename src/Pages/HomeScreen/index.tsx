import React from "react";

import { Container, NewResultsContainer } from "./styles";

import SearchBar from "../../Components/SearchBar";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import MyCarousel from "../../Components/Carousel";
import ResultCard from "../../Components/ResultCard";

const HomeScreen: React.FC = () => {
  const i = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; //receber a resposta da api
  return (
    <Container>
      <Header />
      <MyCarousel />
      <SearchBar />
      <NewResultsContainer>
        <p>Últimas Atualizações</p>
        {i.map((i) => (
          <ResultCard key={i} />
        ))}
      </NewResultsContainer>
      <Footer />
    </Container>
  );
};

export default HomeScreen;
