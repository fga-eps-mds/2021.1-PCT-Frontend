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
  width: 90%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 20px;
  overflow: auto;

  p {
    font-size: 2rem;
    line-height: 2rem;
    font-weight: bold;
    font-style: normal;
    align-self: flex-start;
    font-family: Rokkitt, sans-serif;

    color: #004346;
  }

  @media screen and (max-width: 1024px) {
    p {
      font-size: 1.5rem;
      line-height: 1.5rem;

      margin-top: 1rem;
      margin-bottom: 1rem;
    }
  }
`;
