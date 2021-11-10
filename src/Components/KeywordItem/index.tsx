import React from "react";
import { Button, ButtonProps } from "react-bootstrap";
import moment from "moment";
import { FiTrash } from "react-icons/fi";

import { apiCrawlers } from "../../services/apiCrawlers";

import {
  Container,
  ResultDate,
  KeywordName,
  TitleDateContainer,
  ButtonStyle,
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
    if (confirm("Tem certeza que deseja deletar esta expressão?")) {
      await apiCrawlers
        .delete(`api/keywords/${item.id}/`)
        .then(() => {
          onDelete();
        });
    }
  };

  const textMargin = {
    marginTop: "2%",
    marginBottom: "2%",
  };

  return (
    <Container onClick={() => openModal()}>
      <TitleDateContainer>
        <KeywordName>{item.keyword}</KeywordName>
        <ResultDate>
          <ul>
            <li style={textMargin}>Criado em: </li>
            <li>{moment(item.created_at).format("DD/MM/YYYY HH:mm")}</li>
          </ul>
        </ResultDate>
        <ButtonStyle>
          <Button onClick={deleteKeyword}>
            <FiTrash color="#ff0000" />
          </Button>
        </ButtonStyle>
      </TitleDateContainer>
    </Container>
  );
};

export default KeywordItem;
