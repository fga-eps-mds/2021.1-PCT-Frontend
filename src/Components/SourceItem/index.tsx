import React from "react";
import { Button, ButtonProps } from "react-bootstrap";
import moment from "moment";
import { FiTrash } from "react-icons/fi";

import { apiCrawlers } from "../../services/api";

import {
  Container,
  ResultDate,
  SourceName,
  TitleDateContainer,
} from "./styles";

export interface SourceResult {
  id: number;
  site_name: string;
  task_name: string;
  task_enabled: boolean;
  task_one_off: boolean;
  url_root: boolean;
  qs_search_keyword_param: string;
  contains_end_path_keyword: boolean;
  allowed_domains: Array<string>;
  allowed_paths: Array<string>;
  retries: number;
  page_load_timeout: number;
  contains_dynamic_js_load: boolean;
  cron_minute: string;
  cron_hour: string;
  cron_day_of_week: string;
  cron_day_of_month: string;
  cron_month_of_year: string;
  created_at: string;
}

interface SourceItemProps extends ButtonProps {
  item: SourceResult;
  onDelete: () => void;
}

const SourceItem: React.FC<SourceItemProps> = ({ item, onDelete }) => {
  const openModal = () => {
    return true;
  };

  const Source = async () => {
    await apiCrawlers
      .delete(`/crawlers/${item.id}/`)
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
        <SourceName>{item.site_name}</SourceName>
        <ResultDate>
          {moment(item.created_at).format("DD/MM/YYYY hh:mm")}
        </ResultDate>
        <Button onClick={Source}>
          <FiTrash />
        </Button>
      </TitleDateContainer>
    </Container>
  );
};

export default SourceItem;
