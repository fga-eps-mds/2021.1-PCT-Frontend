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
  margin-bottom: 6%;
  overflow: auto;

  .results-title {
    align-self: flex-start;
    font-family: Rokkitt, sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 42px;
    line-height: 50px;
    /* identical to box height */

    color: #004346;
  }
`;
