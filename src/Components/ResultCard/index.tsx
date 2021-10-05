import React from "react";

import {
  Container,
  ResultCategories,
  ResultCategoriesContainer,
  ResultCategoriesText,
  ResultDate,
  ResultLink,
  ResultTitle,
  TitleDateContainer,
} from "./styles";

const ResultCard: React.FC = () => {
  const categories = [1, 2, 3]; //receber as categorias

  const openLink = () => {
    window.open("https://google.com", "_blank");
  };

  return (
    <Container onClick={() => openLink()}>
      <TitleDateContainer>
        <ResultTitle>Teste teste teste teste </ResultTitle>
        <ResultDate>04/10/2021</ResultDate>
      </TitleDateContainer>
      <ResultLink href="https://www.google.com" target="_blank">
        www.google.com
      </ResultLink>

      <ResultCategoriesText>Categorias</ResultCategoriesText>
      <ResultCategoriesContainer>
        {categories.map((i) => (
          <ResultCategories key={i}>Justiça</ResultCategories>
        ))}
      </ResultCategoriesContainer>
    </Container>
  );
};

export default ResultCard;
