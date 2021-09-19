import React from "react";

import { Container } from "./styles";

import SearchBar from "../../Components/SearchBar";
import Header from "../../Components/Header";

const HomeScreen: React.FC = () => {
  return (
    <Container>
      <Header />
      <SearchBar />
    </Container>
  );
};

export default HomeScreen;
