import styled from "styled-components";

export const Container = styled.div`
  // height: 100vh;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const NewsTitle = styled.p`
  flex: 1;
  margin-left: 10%;
  margin-bottom: 0.2%;
  align-self: flex-start;

  color: #004346;
  font-size: 1.5rem;
  font-weight: bold;
  font-style: normal;
  line-height: 1.5rem;
  font-family: Rokkitt, sans-serif;

  @media screen and (max-width: 1024px) {
    margin-left: 5%;
  }
`;

export const NewResultsContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  width: 90%;
  /* padding-top: 20%; */
  /* max-height: 50vh; */

  overflow: auto;
  overflow-x: hidden;

  margin-bottom: 1rem;

  /* @media screen and (max-width: 1024px) {
    max-height: 45vh;
  } */
`;