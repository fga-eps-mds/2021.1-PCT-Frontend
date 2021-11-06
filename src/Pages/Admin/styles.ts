import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: column;

  position: relative;
`;

export const Title = styled.p`
  flex: 1;
  margin-bottom: 5vh;
  align-self: center;

  color: #004346;
  font-size: 2rem;
  font-weight: bold;
  font-style: normal;
  line-height: 1.5rem;
  font-family: Rokkitt, sans-serif;

  @media screen and (max-width: 1024px) {
    margin-left: 5%;
  }
`;
