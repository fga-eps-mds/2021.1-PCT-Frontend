import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";
import { apiCrawlers } from "../../services/apiCrawlers";

import { Col, Modal, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { SourceResult } from "../../Components/SourceItem";

import { CustomCheckbox } from "./styles";


type CrawlerFormData = {
  site_name_display: string;
  url_root: string;
  qs_search_keyword_param: string;
  allowed_domains: Array<string>;
  allowed_paths: Array<string>;
  task_enabled: boolean;
  task_one_off: boolean;
  contains_dynamic_js_load: boolean;
  contains_end_path_keyword: boolean;
  retries: number;
  page_load_timeout: number;
  cron_minute: string;
  cron_hour: string;
  cron_day_of_week: string;
  cron_day_of_month: string;
  cron_month_of_year: string;
};

type CrawlerRegistrationErrorResponse = {
  site_name_display: Array<string>;
  url_root: Array<string>;
  qs_search_keyword_param: Array<string>;
  allowed_domains: Array<string>;
  allowed_paths: Array<string>;
  task_enabled: Array<string>;
  task_one_off: Array<string>;
  contains_dynamic_js_load: Array<string>;
  contains_end_path_keyword: Array<string>;
  retries: Array<string>;
  page_load_timeout: Array<string>;
  cron_minute: Array<string>;
  cron_hour: Array<string>;
  cron_day_of_week: Array<string>;
  cron_day_of_month: Array<string>;
  cron_month_of_year: Array<string>;
};

interface SourceModalProps {
  showModal: boolean;
  isUpdateModal: boolean;
  handleClose: () => void;
  onDataUpdated: () => void;
  source?: SourceResult;
}

const SourceModal: React.FC<SourceModalProps> = ({
  showModal,
  isUpdateModal,
  handleClose,
  onDataUpdated,
  source,
}: SourceModalProps) => {
  const INITIAL_FORM_DATA: CrawlerFormData = {
    site_name_display: "",
    url_root: "",
    qs_search_keyword_param: "",
    allowed_domains: Array<string>(),
    allowed_paths: Array<string>(),
    task_enabled: true,
    task_one_off: false,
    contains_dynamic_js_load: true,
    contains_end_path_keyword: false,
    retries: 1,
    page_load_timeout: 5,
    cron_minute: "",
    cron_hour: "",
    cron_day_of_week: "*",
    cron_day_of_month: "*",
    cron_month_of_year: "*",
  };

  const INITIAL_FORM_ERRORS: CrawlerRegistrationErrorResponse = {
    site_name_display: Array<string>(),
    url_root: Array<string>(),
    qs_search_keyword_param: Array<string>(),
    allowed_domains: Array<string>(),
    allowed_paths: Array<string>(),
    task_enabled: Array<string>(),
    task_one_off: Array<string>(),
    contains_dynamic_js_load: Array<string>(),
    contains_end_path_keyword: Array<string>(),
    retries: Array<string>(),
    page_load_timeout: Array<string>(),
    cron_minute: Array<string>(),
    cron_hour: Array<string>(),
    cron_day_of_week: Array<string>(),
    cron_day_of_month: Array<string>(),
    cron_month_of_year: Array<string>(),
  };

  const [formData, setFormdata] =
    useState<CrawlerFormData>(INITIAL_FORM_DATA);

  const [formErrors, setFormErrors] =
    useState<CrawlerRegistrationErrorResponse>(INITIAL_FORM_ERRORS);

  // Atualiza quando o estado da modal se altera
  useEffect(() => {
    setFormdata({
      site_name_display: source?.site_name_display || "",
      url_root: source?.url_root || "",
      qs_search_keyword_param: source?.qs_search_keyword_param || "",
      allowed_domains: source?.allowed_domains || [],
      allowed_paths: source?.allowed_paths || [],
      task_enabled: source ? source.task_enabled : true,
      task_one_off: source ? source.task_one_off : false,
      contains_dynamic_js_load: source ? source.contains_dynamic_js_load : true,
      contains_end_path_keyword: source
        ? source.contains_end_path_keyword
        : false,
      retries: source?.retries || 1,
      page_load_timeout: source?.page_load_timeout || 5,
      cron_minute: source?.cron_minute || "",
      cron_hour: source?.cron_hour || "",
      cron_day_of_week: source?.cron_day_of_week || "*",
      cron_day_of_month: source?.cron_day_of_month || "*",
      cron_month_of_year: source?.cron_month_of_year || "*",
    });
  }, [isUpdateModal]);

  function handleInputChage(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setFormdata({ ...formData, [name]: value });
  }

  function handleInputBooleanChage(event: ChangeEvent<HTMLInputElement>) {
    const { name } = event.target;
    const current_value = (formData as any)[name];
    setFormdata({ ...formData, [name]: !current_value });
  }

  function handleListInputChage(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setFormdata({ ...formData, [name]: value.split(",") });
  }

  function normalize_text_id(text: string) {
    return text
      .trim()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .replace(/[&/\\#,+()$~%.'":*?<>{}\s]/g, "_");
  }

  function closeModalOnUpdate() {
    handleClose();
    onDataUpdated();
  }

  function onCloseModal() {
    handleClose();
    setFormdata(INITIAL_FORM_DATA);
    setFormErrors(INITIAL_FORM_ERRORS);
  }

  async function setErrors(errorResponse: CrawlerRegistrationErrorResponse) {
    setFormErrors(errorResponse);
  }

  async function registerSource(data: FormData) {
    await apiCrawlers
      .post("api/crawlers/", data)
      .then(() => {
        closeModalOnUpdate();
      })
      .catch((error) => {
        try {
          const errorResponse = error?.response?.data;
          setErrors(errorResponse);
        } catch {
          const msg = "Ocorreu um erro inesperado ao cadastrar!";
          alert(msg);
        }
      });
  }

  async function updateSource(data: FormData) {
    await apiCrawlers
      .put(`api/crawlers/${source?.id}/`, data)
      .then(() => {
        closeModalOnUpdate();
      })
      .catch((error) => {
        try {
          const errorResponse = error?.response?.data;
          setErrors(errorResponse);
        } catch {
          const msg = "Ocorreu um erro inesperado ao atualizar!";
          alert(msg);
        }
      });
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const {
      site_name_display,
      url_root,
      qs_search_keyword_param,
      allowed_domains,
      allowed_paths,
      task_enabled,
      task_one_off,
      contains_dynamic_js_load,
      contains_end_path_keyword,
      retries,
      page_load_timeout,
      cron_minute,
      cron_hour,
      cron_day_of_week,
      cron_day_of_month,
      cron_month_of_year,
    } = formData;

    const data = new FormData();

    data.append("site_name_display", site_name_display);
    // Gerados automaticamente a partir do nome do site
    data.append("site_name", normalize_text_id(site_name_display));
    data.append("task_name", `${normalize_text_id(site_name_display)}_crawler`);
    //

    data.append("url_root", url_root);
    data.append("qs_search_keyword_param", qs_search_keyword_param);
    data.append("allowed_domains", JSON.stringify(allowed_domains));
    data.append("allowed_paths", JSON.stringify(allowed_paths));
    data.append("task_enabled", String(task_enabled));
    data.append("task_one_off", String(task_one_off));
    data.append("contains_dynamic_js_load", String(contains_dynamic_js_load));
    data.append("contains_end_path_keyword", String(contains_end_path_keyword));
    data.append("retries", String(retries));
    data.append("page_load_timeout", String(page_load_timeout));
    data.append("cron_minute", cron_minute);
    data.append("cron_hour", cron_hour);
    data.append("cron_day_of_week", cron_day_of_week);
    data.append("cron_day_of_month", cron_day_of_month);
    data.append("cron_month_of_year", cron_month_of_year);

    if (isUpdateModal) {
      await updateSource(data);
    } else {
      await registerSource(data);
    }
  }

  return (
    <Modal show={showModal} onHide={onCloseModal}>
      <Modal.Header>
        <Modal.Title>
          {isUpdateModal
            ? `Atualizar '${source?.site_name_display}'`
            : "Cadastro de fonte"}
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form id="source-registration-form" onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label column="lg">Informações da fonte</Form.Label>
            <Form.Group className="mb-3">
              <Form.Label>Nome do site</Form.Label>
              <Form.Control
                type="text"
                id="site_name_display"
                name="site_name_display"
                value={formData["site_name_display"]}
                onChange={handleInputChage}
                isInvalid={!!formErrors.site_name_display?.length}
                placeholder="Nome do site"
              />
              <Form.Control.Feedback type="invalid">
                {formErrors.site_name_display[0]}
              </Form.Control.Feedback>
              <Form.Text className="text-muted">
                Nome do site ou nome + seção de um site. Formato: site_crawler
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3">
              <Row className="g-2">
                <Form.Label>URL de início</Form.Label>
                <Col md={8}>
                  <Form.Control
                    type="text"
                    id="url_root"
                    name="url_root"
                    value={formData["url_root"]}
                    onChange={handleInputChage}
                    placeholder="URL de início"
                    isInvalid={!!formErrors.url_root?.length}
                  />
                  <Form.Control.Feedback type="invalid">
                    {formErrors.url_root[0]}
                  </Form.Control.Feedback>
                </Col>
                <Col md>
                  <Form.Control
                    type="text"
                    id="qs_search_keyword_param"
                    name="qs_search_keyword_param"
                    value={formData["qs_search_keyword_param"]}
                    onChange={handleInputChage}
                    placeholder="Param. de busca"
                    isInvalid={!!formErrors.qs_search_keyword_param?.length}
                  />
                  <Form.Control.Feedback type="invalid">
                    {!!formErrors.qs_search_keyword_param?.length &&
                      formErrors.qs_search_keyword_param[0]}
                  </Form.Control.Feedback>
                </Col>
              </Row>
              <Form.Text className="text-muted">
                URL que será utilizada pelo crawler para iniciar a coleta de
                dados. Observe, que essa URL não precisa ser a &quot;home&quot;
                do site
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3">
              <Row className="g-2">
                <Form.Label>Restrição de caminhos</Form.Label>
                <Form.Control
                  type="text"
                  id="allowed_domains"
                  name="allowed_domains"
                  value={formData["allowed_domains"].join(",")}
                  onChange={handleListInputChage}
                  placeholder="Domínios"
                  isInvalid={!!formErrors.allowed_domains?.length}
                />
                <Form.Control.Feedback type="invalid">
                  {!!formErrors.allowed_domains?.length &&
                    formErrors.allowed_domains[0]}
                </Form.Control.Feedback>
                <Form.Text className="text-muted">
                  Domínios permitidos que o crawler pode executar. Digite os
                  domínios separados por &quot;,&quot; (ex: google.com,
                  www.mpf.mp.br).
                </Form.Text>
              </Row>
              <Row className="g-2">
                <Form.Control
                  type="text"
                  id="allowed_paths"
                  name="allowed_paths"
                  value={formData["allowed_paths"].join(",")}
                  onChange={handleListInputChage}
                  placeholder="Paths"
                  isInvalid={!!formErrors.allowed_paths?.length}
                />
                <Form.Control.Feedback type="invalid">
                  {!!formErrors.allowed_paths?.length &&
                    formErrors.allowed_paths[0]}
                </Form.Control.Feedback>
                <Form.Text className="text-muted">
                  Caminhos permitidos (paths). Digite os paths separados por
                  &quot;,&quot; (ex: noticias, jurisprudencia/documentos).
                </Form.Text>
              </Row>
            </Form.Group>
          </Form.Group>

          <hr />
          <Form.Group className="mb-3">
            <Form.Label column="lg">Controle de execução</Form.Label>
            <CustomCheckbox
              type="checkbox"
              id="task_enabled"
              name="task_enabled"
              checked={formData["task_enabled"]}
              label="Habilitar coleta periódica"
              onChange={handleInputBooleanChage}
            />
            <CustomCheckbox
              type="checkbox"
              id="task_one_off"
              name="task_one_off"
              checked={formData["task_one_off"]}
              label="Desabilitar tarefa após execução"
              onChange={handleInputBooleanChage}
            />
            <CustomCheckbox
              type="checkbox"
              id="contains_dynamic_js_load"
              name="contains_dynamic_js_load"
              checked={formData["contains_dynamic_js_load"]}
              label="Possui carregamento dinâmico (Javascript)"
              onChange={handleInputBooleanChage}
            />
            <CustomCheckbox
              type="checkbox"
              id="contains_end_path_keyword"
              name="contains_end_path_keyword"
              checked={formData["contains_end_path_keyword"]}
              label="Alterar expressões pelo path da URL"
              onChange={handleInputBooleanChage}
            />
            <Form.Group className="mb-3">
              <Row className="g-2">
                <Col>
                  <Form.Label>Quantidade de tentativas</Form.Label>
                  <Form.Control
                    type="number"
                    id="retries"
                    name="retries"
                    value={formData["retries"]}
                    onChange={handleInputChage}
                    placeholder="Tentativas"
                    isInvalid={!!formErrors.retries?.length}
                  />
                  <Form.Control.Feedback type="invalid">
                    {!!formErrors.retries?.length && formErrors.retries[0]}
                  </Form.Control.Feedback>
                  <Form.Text className="text-muted">
                    Quantidade de tentativas de carregamento de uma página
                  </Form.Text>
                </Col>
                <Col>
                  <Form.Label>Timeout de carregamento (segundos)</Form.Label>
                  <Form.Control
                    type="number"
                    id="page_load_timeout"
                    name="page_load_timeout"
                    value={formData["page_load_timeout"]}
                    onChange={handleInputChage}
                    placeholder="Timeout em segundos"
                    isInvalid={!!formErrors.page_load_timeout?.length}
                  />
                  <Form.Control.Feedback type="invalid">
                    {!!formErrors.page_load_timeout?.length &&
                      formErrors.page_load_timeout[0]}
                  </Form.Control.Feedback>
                  <Form.Text className="text-muted">
                    Tempo de espera máximo, para o carregamento de uma página,
                    antes de considerar como erro
                  </Form.Text>
                </Col>
              </Row>
            </Form.Group>
          </Form.Group>

          <hr />
          <Form.Group className="mb-3">
            <Form.Label column="lg">Periodicidade</Form.Label>
            <Row className="g-2">
              <Col md>
                <Form.Label>Minuto</Form.Label>
                <Form.Control
                  type="text"
                  id="cron_minute"
                  name="cron_minute"
                  value={formData["cron_minute"]}
                  onChange={handleInputChage}
                  placeholder="Minuto"
                />
              </Col>
              <Col md>
                <Form.Label>Hora</Form.Label>
                <Form.Control
                  type="text"
                  id="cron_hour"
                  name="cron_hour"
                  value={formData["cron_hour"]}
                  onChange={handleInputChage}
                  placeholder="Hora"
                />
              </Col>
              <Col md>
                <Form.Label>Dia (mês)</Form.Label>
                <Form.Control
                  type="text"
                  id="cron_day_of_month"
                  name="cron_day_of_month"
                  value={formData["cron_day_of_month"]}
                  onChange={handleInputChage}
                  placeholder="Dia (mês)"
                />
              </Col>
              <Col md>
                <Form.Label>Mês</Form.Label>
                <Form.Control
                  type="text"
                  id="cron_month_of_year"
                  name="cron_month_of_year"
                  value={formData["cron_month_of_year"]}
                  onChange={handleInputChage}
                  placeholder="Mês"
                />
              </Col>
              <Col md>
                <Form.Label>Dia (semana)</Form.Label>
                <Form.Control
                  type="text"
                  id="cron_day_of_week"
                  name="cron_day_of_week"
                  value={formData["cron_day_of_week"]}
                  onChange={handleInputChage}
                  placeholder="Dia (semana)"
                />
              </Col>
            </Row>
            <Form.Text className="text-muted">
              Controle da periodicidade de execução da coleta
              <a
                href="https://crontab.guru/"
                target="blank"
                style={{ marginLeft: "5px" }}
              >
                (formato crontab)
              </a>
            </Form.Text>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="tertiary" onClick={onCloseModal}>
          Cancelar
        </Button>
        <Button variant="primary" form="source-registration-form" type="submit">
          {isUpdateModal ? `Atualizar` : "Cadastrar"}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default SourceModal;
