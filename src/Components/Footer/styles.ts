import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 5%;
  max-height: 5%;
  width: 100%;
  padding-left: 20%;
  padding-right: 20%;
  background-color: #0f210a;
  position: absolute;
  bottom: 0;
`;
export const CopyrightContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 40%;
`;

export const Copyright = styled.text`
  color: #fdfeff;
  margin-left: 5px;
  margin-right: 5px;
  font-size: 16px;
  font-family: Rokkit, sans-serif;
`;

export const FooterButtonsContainer = styled.div`
  width: 25%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;

export const FooterButtons = styled.img`
  height: 25px;
  width: 25px;
`;
