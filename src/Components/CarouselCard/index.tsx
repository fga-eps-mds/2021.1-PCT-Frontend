import React from "react";

import { Container, CarouselImage, CarouselTextContainer } from "./styles";

interface CarouselCardProps {
  image?: string;
  title?: string;
  text?: string;
}

const CarouselCard: React.FC<CarouselCardProps> = ({ image, title, text }) => {
  return (
    <Container>
      <CarouselImage src={image} />
      <CarouselTextContainer>
        <h3>{title}</h3>
        <h4>{text}</h4>
      </CarouselTextContainer>
    </Container>
  );
};

export default CarouselCard;
