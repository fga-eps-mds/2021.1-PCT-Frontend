import * as React from "react";
import { useEffect, useState, useRef } from "react";

import CarouselCard from "../CarouselCard";

import { CardContainer, Container, StyledCarousel } from "./styles";

import image from "../../assets/images/pctsImage.jpg";
import image2 from "../../assets/images/AulaInaugural.png";

const MyCarousel: React.FC = () => {
  const items = [
    {
      id: 1,
      title: "Sejam bem vindos ao Projeto PCT's",
      image: image,
      text: "Este site é dedicado a unificar as informações sobre povos e comunidades tradicionais brasileiras. ",
    },
    {
      id: 2,
      title: "Aula Inaugural 2021 - PPGH",
      image: image2,
      text: "As humanidades nos museus de ciência: leituras pós-coloniais. ",
    },
  ];

  return (
    <Container>
      <StyledCarousel
        isRTL={false}
        // enableAutoPlay
        // autoPlaySpeed={5000}
      >
        {items.map((item) => (
          <CarouselCard
            key={item.id}
            image={item.image}
            title={item.title}
            text={item.text}
          />
        ))}
      </StyledCarousel>
    </Container>
  );
};

export default MyCarousel;
