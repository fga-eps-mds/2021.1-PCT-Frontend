import React from "react";
import { ButtonProps } from "react-bootstrap";
import moment from "moment";


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
}

const KeywordItem: React.FC<KeywordItemProps> = ({ item }) => {
  const openModal = () => {
    return true
  };

  return (
    <Container onClick={() => openModal()}>
      <TitleDateContainer>
        <KeywordName>{item.keyword}</KeywordName>
        <ResultDate>{moment(item.created_at).format("DD/MM/YYYY hh:mm")}</ResultDate>
      </TitleDateContainer>
    </Container>
  );
};

export default KeywordItem;
