import React from "react";
import { ButtonProps } from "react-bootstrap";

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

interface documentResult {
  id: number;
  source: string;
  url: string;
  slug: string;
  title: string;
  content: string;
  checksum: string;
  updated_at: string;
  created_at: string;
}
interface ResultCardProps extends ButtonProps {
  item: documentResult;
}

const ResultCard: React.FC<ResultCardProps> = ({ item }) => {
  const categories = [1, 2, 3]; //receber as categorias

  const openLink = () => {
    window.open("https://google.com", "_blank");
  };

  return (
    <Container onClick={() => openLink()}>
      <TitleDateContainer>
        <ResultTitle>{item.title}</ResultTitle>
        <ResultDate>{item.updated_at}</ResultDate>
      </TitleDateContainer>
      <ResultLink href={item.url} target="_blank">
        {item.url}
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
