import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;

  width: 40%;
  margin-top: 1rem;
  margin-bottom: 1rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  background-color: #fdfeff;

  border-radius: 5px;
  border-color: black;
  border: 1px solid black;
`;

export const SearchForm = styled.form`
  display: flex;
  width: 100%;
  flex-direction: row;
`;

export const SearchInput = styled.input`
  flex: 1;
  width: 100%;
  font-size: 1rem;
  border: 0px solid black;
`;

export const MyLink = styled(Link)`
  color: #1bc47d;
  font-size: 1.5rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
`;

export const SearchIcon = styled.img`
  width: 1rem;
  height: 1rem;
`;
