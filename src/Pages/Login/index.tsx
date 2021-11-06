import React, { FormEvent, useState } from "react";
import { useHistory } from "react-router-dom";
import jwt_decode from "jwt-decode";

import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import { Col, Row } from "react-bootstrap";

import {
  Container,
  LoginForm,
  BotaoLogar,
  OpcoesExtra,
  Input,
  ItemForm,
  ItemFormOptions,
  MyLink,
} from "./styles";

import { apiUsers } from "../../services/api";

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
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();

  const history = useHistory();

  const login = async (event: FormEvent) => {
    event.preventDefault();
    const dataRequest: LoginRequest = {
      username: email,
      password: password,
    };

    await apiUsers
      .post<LoginRequest, APIResponse<LoginResponse>>("token/", dataRequest)
      .then((response: APIResponse<LoginResponse>) => {
        const { data, status } = response;

        if (status === 200) {
          localStorage.setItem("acessToken", data?.access);
          localStorage.setItem("refreshToken", data?.refresh);

          const accessDesc: any = jwt_decode(data?.access);
          localStorage.setItem("userID", accessDesc["user_id"]);
        }
      })
      .catch(() => {
        alert(
          "Erro ao tentar realizar o login. Por favor, tente novamente mais tarde"
        );
      });

    history.push("/admin");
  }

  return (
    <Container>
      <Header />
      <Row md={10} className="align-items-sm-center" style={{ height: "85%" }}>
        <Col>
          <LoginForm>
            <h3>Login</h3>
            <>
              <ItemForm>
                <Input
                  type="text"
                  // type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
              <ItemFormOptions>
                <ul>
                  <OpcoesExtra>
                    <MyLink to={"/"}>Esqueci minha senha</MyLink>
                  </OpcoesExtra>
                  <OpcoesExtra>
                    <MyLink to={"/cadastro"}>Não possuo cadastro</MyLink>
                  </OpcoesExtra>
                </ul>
              </ItemFormOptions>
            </>
          </LoginForm>
        </Col>
      </Row>
      <Footer />
    </Container>
  );
};

export default Login;
