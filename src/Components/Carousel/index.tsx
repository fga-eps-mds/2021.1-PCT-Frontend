import * as React from "react";
import { useEffect, useState, useRef } from "react";

import CarouselCard from "../CarouselCard";

import { CardContainer, Container, StyledCarousel } from "./styles";
import { items } from "./mockedPosts";

const MyCarousel: React.FC = () => {
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
