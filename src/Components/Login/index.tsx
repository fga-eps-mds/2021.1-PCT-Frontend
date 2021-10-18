import React from "react";

import {
  Container,
  LoginForm,
  BotaoLogar,
  EsqueciSenha,
  Input,
  ItemForm,
  MyLink
} from "./styles";

const TelaLogin: React.FC = () => {
  return (
    <Container>
        <LoginForm>
            <h3>Login</h3>
            <form>
                <ItemForm>
                    <Input type="text" placeholder="Email"  />
                </ItemForm>
                <ItemForm>
                    <Input type="password" placeholder="Senha" />
                    </ItemForm>
                <ItemForm>
                    <BotaoLogar type="submit" className="btnSubmit">Entrar
                    </BotaoLogar>
                </ItemForm>
                <ItemForm>
                    <EsqueciSenha>
                        <MyLink to={"/"}>Esqueci minha senha</MyLink>
                    </EsqueciSenha>
                </ItemForm>
            </form>
        </LoginForm>
    </Container>
  );
};

export default TelaLogin;
