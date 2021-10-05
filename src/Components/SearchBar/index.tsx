import React from "react";

import { Container, SearchIcon, SearchInput } from "./styles";

import searchIcon from "./../../assets/images/searchIcon.png";

const SearchBar: React.FC = () => {
  return (
    <Container>
      <SearchInput placeholder="Digite sua pesquisa" />
      <SearchIcon src={searchIcon} />
    </Container>
  );
};

export default SearchBar;
