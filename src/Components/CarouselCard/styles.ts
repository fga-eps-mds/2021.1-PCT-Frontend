import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
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
  bottom: 15%;
  padding: 1rem;
  max-height: 50%;

  border-radius: 5px;
  position: absolute;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: #000000;

  color: white;
  opacity: 80%;
  overflow: auto;
  overflow-x: hidden;

  h3,
  h4 {
    font-size: 1rem;
  }

  @media screen and (max-width: 1024px) {
    padding: 0.8rem;
    h3,
    h4 {
      font-size: 0.8rem;
    }
  }

  @media screen and (max-width: 400px) {
    padding: 0.5rem;
    h3,
    h4 {
      font-size: 0.7rem;
    }
  }
`;
