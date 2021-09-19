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
  margin-top: 20px;
`;

export const SearchInput = styled.input`
  flex: auto;
  background-color: #fdfeff;
  border: 0px solid black;
`;

export const SearchIcon = styled.img`
  height: 22px;
  max-height: 40px;
  width: 22px;
  max-width: 40px;
`;
