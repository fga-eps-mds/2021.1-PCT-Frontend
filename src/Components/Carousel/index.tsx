import * as React from "react";
import { useEffect, useState, useRef } from "react";

import CarouselCard from "../CarouselCard";

import { Container, StyledCarousel, ArrowButton } from "./styles";
import { items } from "./mockedPosts";

import leftArrow from "../../assets/images/leftArrow.png";
import rightArrow from "../../assets/images/rightArrow.png";

const MyCarousel: React.FC = () => {
  const myArrow = (
    type: string,
    onClick: () => void,
    isEdge: boolean | undefined
  ) => {
    const pointer = type === "PREV" ? leftArrow : rightArrow;
    return (
      <ArrowButton onClick={onClick} disabled={isEdge}>
        <img src={pointer} />
      </ArrowButton>
    );
  };

  return (
    <Container>
      <StyledCarousel
        isRTL={false}
        renderArrow={({ type, onClick, isEdge }) =>
          myArrow(type, onClick, isEdge)
        }
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
