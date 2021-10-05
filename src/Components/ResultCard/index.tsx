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
  return (
    <Container onClick={() => alert("teste")}>
      <TitleDateContainer>
        <ResultTitle>Teste teste teste teste </ResultTitle>
        <ResultDate>04/10/2021</ResultDate>
      </TitleDateContainer>
      <ResultLink href={"www.google.com"}>www.google.com</ResultLink>
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
