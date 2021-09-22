import React from "react";
import { Container, CarouselImage } from "./styles";

import pctsImage from "../../assets/images/pctsImage.jpg";

const MyCarousel: React.FC = () => {
  return (
    <Container>
      <CarouselImage src={pctsImage} style={{ height: 300 }} />
    </Container>
  );
};

export default MyCarousel;
