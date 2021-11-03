import React from "react";
import { Button, ButtonProps } from "react-bootstrap";
import moment from "moment";
import { FiTrash } from "react-icons/fi";

import { apiCrawlers } from "../../services/api";

import {
  Container,
  ResultDate,
  KeywordName,
  TitleDateContainer,
} from "./styles";

export interface KeywordResult {
  id: number;
  keyword: string;
  created_at: string;
}

interface KeywordItemProps extends ButtonProps {
  item: KeywordResult;
  onDelete: () => void;
}

const KeywordItem: React.FC<KeywordItemProps> = ({ item, onDelete }) => {
  const openModal = () => {
    return true;
  };

  const deleteKeyword = async () => {
    await apiCrawlers
      .delete(`keywords/${item.id}/`)
      .then(() => {
        onDelete();
      })
      .catch(() => {
        alert("Ocorreu um erro inesperado ao deletar expressão!");
      });
  };

  return (
    <Container onClick={() => openModal()}>
      <TitleDateContainer>
        <KeywordName>{item.keyword}</KeywordName>
        <ResultDate>
          {moment(item.created_at).format("DD/MM/YYYY hh:mm")}
        </ResultDate>
        <Button onClick={deleteKeyword}>
          <FiTrash />
        </Button>
      </TitleDateContainer>
    </Container>
  );
};

export default KeywordItem;
