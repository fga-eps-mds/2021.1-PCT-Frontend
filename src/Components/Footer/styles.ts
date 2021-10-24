import styled from "styled-components";

export const Container = styled.div`
  flex: 0.5;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;

  width: 100%;
  height: 6%;
  max-height: 7%;
  
  /* padding-right: 5%; */
  background-color: #0f210a;

  bottom: 0;
  position: fixed;

  @media screen and (max-width: 1024px) {
    padding-left: 5%;
    padding-right: 1%;
  }
`;
export const CopyrightContainer = styled.div`
  flex: 2;
  display: flex;
  flex-direction: row;
  width: 10%;
  padding-left: 5%;
`;

export const Copyright = styled.text`
  color: #fdfeff;
  font-size: 1rem;
  margin-left: 0.3rem;
  font-family: Rokkit, sans-serif;

  @media screen and (max-width: 1024px) {
    font-size: 0.75rem;
  }
`;

export const FooterButtonsContainer = styled.div`
  flex: 1;
  max-width: 25%;
  height: 100%;
  display: flex;
  margin-left: -50%;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;

export const FooterButtons = styled.img`
  height: 1.5rem;
  width: 1.5rem;

  @media screen and (max-width: 1024px) {
    height: 1rem;
    width: 1rem;
  }
`;
