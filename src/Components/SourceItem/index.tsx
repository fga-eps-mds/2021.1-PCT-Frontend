import React from "react";
import { Button } from "react-bootstrap";
import moment from "moment";
import { FiTrash, FiClock } from "react-icons/fi";
import { useHistory } from "react-router-dom";

import { apiCrawlers } from "../../services/api";

import {
  Container,
  ResultDate,
  SourceName,
  TitleDateContainer,
  ButtonStyle,
} from "./styles";

export interface SourceResult {
  id: number;
  site_name: string;
  site_name_display: string;
  task_name: string;
  task_enabled: boolean;
  task_one_off: boolean;
  url_root: string;
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

interface SourceItemProps {
  item: SourceResult;
  onDelete: () => void;
  onClick: (sourceItem: SourceResult) => void;
}

const SourceItem: React.FC<SourceItemProps> = ({ item, onDelete, onClick }) => {
  
  const history = useHistory(); 
  
  const deleteSource = async (e: React.SyntheticEvent) => {
    e.stopPropagation();
    if (confirm('Tem certeza que deseja deletar essa fonte?')) {
      await apiCrawlers
        .delete(`crawlers/${item.id}/`)
        .then(() => {
          onDelete();
        })
        .catch(() => {
          alert("Ocorreu um erro inesperado ao deletar a fonte! Tente novamente.");
        });
    }
  };

  const monitoringSource = (e: React.SyntheticEvent) => {
    e.stopPropagation();
    history.push(`/fontes/monitoramento/${item.id}`); 
  };

  return (
    <Container onClick={() => onClick(item)} style={{ cursor: "pointer" }}>
      <TitleDateContainer>
        <SourceName>{item.site_name}</SourceName>
        <ResultDate>
          {moment(item.created_at).format("DD/MM/YYYY hh:mm")}
        </ResultDate>
        <ButtonStyle>
          <Button onClick={monitoringSource}>
            <FiClock />
          </Button>
        </ButtonStyle>
        <ButtonStyle>
          <Button onClick={deleteSource}>
            <FiTrash />
          </Button>
        </ButtonStyle>
      </TitleDateContainer>
    </Container>
  );
};

export default SourceItem;
