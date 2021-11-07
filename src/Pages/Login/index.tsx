import React, { FormEvent, useState } from "react";
import { useHistory } from "react-router-dom";
import jwt_decode from "jwt-decode";

import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import { Col, Row } from "react-bootstrap";

import { Container, LoginForm, BotaoLogar, Input, ItemForm } from "./styles";

import { apiCrawlers } from "../../services/api";

import { saveSession } from "../../utils/userAuthentication";

type LoginRequest = {
  username?: string;
  password?: string;
};

type LoginResponse = {
  refresh: string;
  access: string;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
interface APIResponse<T = any> {
  data: T;
  message: string;
  status: number;
}

const Login: React.FC = () => {
  const [username, setUsername] = useState<string>();
  const [password, setPassword] = useState<string>();

  const history = useHistory();

  const login = async (event: FormEvent) => {
    event.preventDefault();
    const dataRequest: LoginRequest = {
      username: username,
      password: password,
    };

    await apiCrawlers
      .post<LoginRequest, APIResponse<LoginResponse>>("token/", dataRequest)
      .then((response: APIResponse<LoginResponse>) => {
        const { data, status } = response;

        if (status === 200) {
          saveSession(data);
        }
      })
      .catch(() => {
        alert(
          "Erro ao tentar realizar o login. Por favor, tente novamente mais tarde"
        );
      });

    history.push("/admin");
  };

  return (
    <Container>
      <Header />
      <Row md={10} className="align-items-sm-center" style={{ height: "85%" }}>
        <Col>
          <h2 style={{ textAlign: "center" }}>Área Restrita</h2>
          <LoginForm>
            <h3>Login</h3>
            <>
              <ItemForm>
                <Input
                  type="text"
                  placeholder="Usuário"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </ItemForm>
              <ItemForm>
                <Input
                  type="password"
                  placeholder="Senha"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </ItemForm>
              <ItemForm>
                <BotaoLogar onClick={login}>Entrar</BotaoLogar>
              </ItemForm>
              {/* <ItemFormOptions>
                <ul>
                  <OpcoesExtra>
                    <MyLink to={"/"}>Esqueci minha senha</MyLink>
                  </OpcoesExtra>
                  <OpcoesExtra>
                    <MyLink to={"/cadastro"}>Não possuo cadastro</MyLink>
                  </OpcoesExtra>
                </ul>
              </ItemFormOptions> */}
            </>
          </LoginForm>
        </Col>
      </Row>
      <Footer />
    </Container>
  );
};

export default Login;
