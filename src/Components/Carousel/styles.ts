import styled from "styled-components";
import Carousel from "react-elastic-carousel";

export const Container = styled.div`
  flex: 2;
  width: 99%;
  display: flex;
  margin-top: 0.5rem;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  /* background-color: pink; */
`;

export const StyledCarousel = styled(Carousel)`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ArrowButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  height: 2.5rem;
  width: 2.5rem;
  align-self: center;
  border-radius: 50%;
  background-color: #172a3a;

  img {
    height: 2rem;
    width: 2rem;
  }

  @media screen and (max-width: 1024px) {
    width: 1.5rem;
    height: 1.5rem;

    img {
      width: 1rem;
      height: 1rem;
    }
  }
`;
