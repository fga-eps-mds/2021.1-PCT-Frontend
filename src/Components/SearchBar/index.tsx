import React from "react";

import { Container, MyLink, SearchIcon, SearchInput } from "./styles";

import searchIcon from "./../../assets/images/searchIcon.png";
import { InputGroupProps } from "react-bootstrap";

interface SearchBarProps extends InputGroupProps {
  searchTerm: string;
  ableToSearch: boolean;
}

const SearchBar: React.FC<SearchBarProps> = ({
  searchTerm,
  onChange,
  ableToSearch,
}) => {
  return (
    <Container>
      <SearchInput
        placeholder="Pesquisar"
        value={searchTerm}
        onChange={onChange}
      />
      <MyLink to={"#"}>
        <SearchIcon src={searchIcon} />
      </MyLink>
    </Container>
  );
};

export default SearchBar;
