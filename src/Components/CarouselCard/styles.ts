import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  max-height: 25vh;
  position: relative;
  background-color: aliceblue;
`;

export const CarouselImage = styled.img`
  width: 100%;
  /* object-fit: contain; */
`;

export const CarouselTextContainer = styled.div`
  left: 5%;
  width: 75%;
  max-height: 50%;
  padding: 1%;
  bottom: 15%;

  border-radius: 5px;
  position: absolute;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: lightgray;

  overflow: auto;
  overflow-x: hidden;
  /* overflow-y: hidden; */
`;
