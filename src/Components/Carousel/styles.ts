import styled from "styled-components";
import Carousel from "react-elastic-carousel";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 98%;
  height: 30vh;
  margin-top: 60px;
  max-height: 300px;
  position: relative;
  align-items: center;
  justify-content: center;
  /* background-color: pink; */
`;

export const StyledCarousel = styled(Carousel)`
  /* flex: 1; */
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  /* background-color: aliceblue; */
`;

export const CardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  width: 100%;
  height: 100%;
  max-height: 25vh;
  background-color: aliceblue;
`;

export const CarouselImage = styled.img`
  width: 100%;
  object-fit: cover;
`;

export const CarouselTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: lightgray;
  position: absolute;
  left: 5%;
  bottom: 50%;
`;
