import React from "react";

import { Container } from "./styles";

import SearchBar from "../../Components/SearchBar";

const HomeScreen: React.FC = () => {
  return (
    <Container>
      <SearchBar />
    </Container>
  );
};

export default HomeScreen;
