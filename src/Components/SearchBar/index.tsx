import React from "react";

import { Container, SearchButton, SearchIcon, SearchInput } from "./styles";

import searchIcon from "./../../assets/images/searchIcon.png";

const SearchBar: React.FC = () => {
  return (
    <Container>
      <SearchInput placeholder="Digite sua pesquisa" />
      <SearchButton>
        <SearchIcon src={searchIcon} />
      </SearchButton>
    </Container>
  );
};

export default SearchBar;
