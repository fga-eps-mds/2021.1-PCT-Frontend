import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;

  background-color: #172a3a;

  width: 80%;
  padding: 1%;

  margin-top: 0.7rem;
  border-radius: 10px;

  @media screen and (max-width: 1024px) {
    width: 100%;
    padding: 2%;
  }
`;

export const TitleDateContainer = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const KeywordName = styled.text`
  font-size: 1rem;
  font-weight: bold;
  font-style: normal;
  font-family: Rokkitt, sans-serif;

  width: 80%;
  height: 1rem;

  display: block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  color: #ffffff;

  @media screen and (max-width: 1024px) {
    font-size: 0.7rem;
  }
`;

export const ResultDate = styled.text`
  font-size: 1rem;
  font-weight: bold;
  font-style: normal;
  font-family: Rokkitt, sans-serif;

  width: 20%;
  display: block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  color: #ffffff;

  @media screen and (max-width: 1024px) {
    font-size: 0.5rem;
  }
`;
