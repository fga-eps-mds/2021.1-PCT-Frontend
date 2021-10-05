import React from "react";

import {
  Container,
  MyLink,
  SearchButton,
  SearchIcon,
  SearchInput,
} from "./styles";

import searchIcon from "./../../assets/images/searchIcon.png";

const SearchBar: React.FC = () => {
  return (
    <Container>
      <SearchInput placeholder="Digite sua pesquisa" />
      <SearchButton>
        <MyLink to={"/resultados"}>
          <SearchIcon src={searchIcon} />
        </MyLink>
      </SearchButton>
    </Container>
  );
};

export default SearchBar;
