import styled from "styled-components";

export const Container = styled.div`
  // height: 100vh;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const NewResultsContainer = styled.div`
  flex: 1;
  width: 60%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 6%;
  overflow: auto;
`;

export const Title = styled.div`
  align-itens: center;
  font-family: Rokkitt, sans-serif;
  font-style: normal;
  font-size: 42px;
  line-height: 50px;
  color: #004346;
  margin: 2%;

  h2 {
    font-weight: bold;
  }
`
