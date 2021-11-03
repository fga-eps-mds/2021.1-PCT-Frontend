import React from "react";
import { useHistory } from "react-router-dom";

import { Container, MyLink, SearchIcon, SearchInput, SearchForm } from "./styles";

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
  
  const history = useHistory();
  
  function realizarPesquisa(e: { preventDefault: () => void; }) {
    history.push(ableToSearch ? `/resultados/${searchTerm}` : "#"); 
  }
  return (
    <Container>
      <SearchForm onSubmit={realizarPesquisa}>
        <SearchInput
          placeholder="Pesquisar"
          value={searchTerm}
          onChange={onChange}
        />
        <MyLink to={ableToSearch ? `/resultados/${searchTerm}` : "#"}>
          <SearchIcon src={searchIcon} />
        </MyLink>
      </SearchForm>
    </Container>
  );
};

export default SearchBar;
