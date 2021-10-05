import * as React from "react";
import { useEffect, useState, useRef } from "react";

import CarouselCard from "../CarouselCard";

import { CardContainer, Container, StyledCarousel } from "./styles";

import image from "../../assets/images/pctsImage.jpg";

const MyCarousel: React.FC = () => {
  const items = [
    {
      id: 1,
      title: "item #1",
      image: image,
      text: "lorem ipsulum, lorem ipsulum, lorem ipsulum, lorem ipsulum, lorem ipsulum, lorem ipsulum, lorem ipsulum, lorem ipsulum, lorem ipsulum, lorem ipsulum, ",
    },
    {
      id: 2,
      title: "item #2",
      image: image,
      text: "lorem ipsulum, lorem ipsulum, lorem ipsulum, lorem ipsulum, lorem ipsulum, lorem ipsulum, lorem ipsulum, lorem ipsulum, lorem ipsulum, lorem ipsulum, ",
    },
    {
      id: 3,
      title: "item #3",
      image: image,
      text: "lorem ipsulum, lorem ipsulum, lorem ipsulum, lorem ipsulum, lorem ipsulum, lorem ipsulum, lorem ipsulum, lorem ipsulum, lorem ipsulum, lorem ipsulum, ",
    },
    {
      id: 4,
      title: "item #4",
      image: image,
      text: "lorem ipsulum, lorem ipsulum, lorem ipsulum, lorem ipsulum, lorem ipsulum, lorem ipsulum, lorem ipsulum, lorem ipsulum, lorem ipsulum, lorem ipsulum, ",
    },
    {
      id: 5,
      title: "item #5",
      image: image,
      text: "lorem ipsulum, lorem ipsulum, lorem ipsulum, lorem ipsulum, lorem ipsulum, lorem ipsulum, lorem ipsulum, lorem ipsulum, lorem ipsulum, lorem ipsulum, ",
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
