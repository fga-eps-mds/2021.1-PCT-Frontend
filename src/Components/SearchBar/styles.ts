import styled from "styled-components";

export const Container = styled.div`
  background-color: #fdfeff;
  max-width: 832px;
  width: 40%;
  max-height: 60px;
  height: 40px;
  border: 1px solid black;
  border-radius: 5px;
  padding-left: 15px;
  padding-right: 15px;
  border-color: black;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 70px;
  margin-bottom: 70px;
`;

export const SearchInput = styled.input`
  flex: 1;
  width: 100%;
  border: 0px solid black;
  background-color: #fdfeff;
`;

export const SearchButton = styled.button`
  border: 0;
  outline: 0;
  cursor: pointer;
  background-color: transparent;
`;

export const SearchIcon = styled.img`
  height: 22px;
  max-height: 40px;
  width: 22px;
  max-width: 40px;
`;
