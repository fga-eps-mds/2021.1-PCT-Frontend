import React from "react";
import { ButtonProps } from "react-bootstrap";
import moment from "moment";

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

interface DocumentResult {
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
  item: DocumentResult;
}

const ResultCard: React.FC<ResultCardProps> = ({ item }) => {
  const categories = [1]; //receber as categorias

  const openLink = () => {
    window.open(item.url, "_blank");
  };

  return (
    <Container onClick={() => openLink()}>
      <TitleDateContainer>
        <ResultTitle>{item.title}</ResultTitle>
        <ResultDate>{moment(item.updated_at).format("DD/MM/YYYY hh:mm")}</ResultDate>
      </TitleDateContainer>
      <ResultLink href={item.url} target="_blank">
        {item.url}
      </ResultLink>

      <ResultCategoriesText>Categorias</ResultCategoriesText>
      <ResultCategoriesContainer>
        {categories.map((i) => (
          <ResultCategories key={i}>
            <text>Documento</text>
          </ResultCategories>
        ))}
      </ResultCategoriesContainer>
    </Container>
  );
};

export default ResultCard;
