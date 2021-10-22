import React, { useState } from "react";
import api from "../../services/api";

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

function initialState() {
  return { email: "", password: "" };
}

const TelaLogin: React.FC = () => {
  const [credenciais, setCredenciais] = useState(initialState);

//   const login = async () => {
//     try {
//         const response = await apiUsers.post('/login', credenciais);
//         const res = response.data;

//         if (res.error){
//             alert(res.message);
//             return false;
//         }

//         localStorage.setItem('@user', JSON.stringify(res.usuario));
//         window.location.reload();
        
//     }  catch (err) {
//         alert(err.message);
//     }  
//   };

  return (
    <Container>
      <LoginForm>
        <h3>Login</h3>
        <>
          <ItemForm>
            <Input
              type="text"
              placeholder="Email"
              name="user"
              onChange={(e) => { 
                setCredenciais({
                    ...credenciais,
                    email: e.target.value
                  });
              }}
            />
          </ItemForm>
          <ItemForm>
            <Input
              type="password"
              placeholder="Senha"
              name="password"
              onChange={(e) => { 
                setCredenciais({
                  ...credenciais,
                  password: e.target.value,
                });
            }}
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
