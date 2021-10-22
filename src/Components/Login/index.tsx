import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import apiUsers from "../../services/apiUsers";

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

const TelaLogin: React.FC = () => {
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();

  const history = useHistory();

  async function login(e: { preventDefault: () => void; }) {

    try {
        const response = await apiUsers.post('COLOCAR ROTA DO LOGIN', {email, senha});
        const res = response.data;

        // localStorage.setItem('userId', response.data.id);
        // localStorage.setItem('userNome', response.data.nome);
        
        history.push('/login');
        
    }  catch (err) {
        alert("Erro ao tentar realizar o login. Por favor, tente novamente mais tarde");
    }  
  }

  return (
    <Container>
      <LoginForm onSubmit={login}>
        <h3>Login</h3>
        <>
          <ItemForm>
            <Input
              type="text"
              placeholder="Email"
              value="email"
              // onChange={e => setEmail(e.target.value)}
            />
          </ItemForm>
          <ItemForm>
            <Input
              type="password"
              placeholder="Senha"
              value="senha"
              // onChange={e => setSenha(e.target.value)}
            />
          </ItemForm>
          <ItemForm>
            <BotaoLogar type="submit" /*onClick={login} */ >
              Entrar
            </BotaoLogar>
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
    </Container>
  );
};

export default TelaLogin;
