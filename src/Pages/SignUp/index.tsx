import React, { FormEvent, useState } from "react";

import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import { Row, Col } from "react-bootstrap";

import { useHistory } from "react-router-dom";

import { apiCrawlers } from "../../services/apiCrawlers";

import {
  Container,
  CadastroForm,
  BotaoCadastrar,
  Input,
  ItemForm,
  OpcoesExtra,
  MyLink,
} from "./styles";

const SignUp: React.FC = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const history = useHistory();

  const signUp = async (event: FormEvent) => {
    event.preventDefault();
    const data = {
      nome,
      email,
      senha,
    };

    // await apiCrawlers
    //   .get("COLOCAR A ROTA DE CADASTRO", data)
    //   .then((response: any) => {
    //     history.push("/login");
    //   });
  };

  return (
    <Container>
      <Header />
      <Row md={10} className="align-items-sm-center" style={{ height: "85%" }}>
        <Col>
          <CadastroForm onSubmit={signUp}>
            <h3>Faça seu cadastro</h3>
            <p>
              {" "}
              Faça seu cadastro para salvar suas pesquisas e poder exportá-las.
            </p>
            <>
              <ItemForm>
                <Input
                  type="text"
                  placeholder="Nome"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                />
              </ItemForm>
              <ItemForm>
                <Input
                  type="text"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </ItemForm>
              <ItemForm>
                <Input
                  type="password"
                  placeholder="Senha"
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                />
              </ItemForm>
              <ItemForm>
                <BotaoCadastrar type="submit">Cadastrar</BotaoCadastrar>
              </ItemForm>
              <ItemForm>
                <OpcoesExtra>
                  <MyLink to={"/login"}>Voltar para tela de login</MyLink>
                </OpcoesExtra>
              </ItemForm>
            </>
          </CadastroForm>
        </Col>
      </Row>
      <Footer />
    </Container>
  );
};

export default SignUp;
