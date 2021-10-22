import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import apiUsers from "../../services/apiUsers";

import {
  Container,
  CadastroForm,
  BotaoCadastrar,
  Input,
  ItemForm,
  OpcoesExtra,
  MyLink,
} from "./styles";

const TelaCadastro: React.FC = () => {

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const history = useHistory();

  async function realizaCadastro(e: Event) {
    e.preventDefault();
    
    const data = {
      nome,
      email,
      senha
    };

    try {
      const response = await apiUsers.post('COLOCAR A ROTA DA API', data)
      alert(`Cadastro realizado com sucesso! ID: ${response.data.id}`);
      history.push('/login');
    } catch (err) {
      alert(`Houve um erro ao cadastrar. Por favor, tente novamente.`);
    }
  }

  return (
    <Container>
      <CadastroForm onSubmit={realizaCadastro}>
        <h3>Faça seu cadastro</h3>
        <p> Faça seu cadastro para salvar suas pesquisas e poder exportá-las.</p>
        <>
          <ItemForm>
            <Input
              type="text"
              placeholder="Nome"
              value={nome}
              onChange={e => setNome(e.target.value)}
            />
          </ItemForm>
          <ItemForm>
            <Input
              type="text"
              placeholder="Email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </ItemForm>
          <ItemForm>
            <Input
              type="password"
              placeholder="Senha"
              value={senha}
              onChange={e => setSenha(e.target.value)}
            />
          </ItemForm>
          <ItemForm>
            <BotaoCadastrar type="submit" >
              Cadastrar
            </BotaoCadastrar>
          </ItemForm>
          <ItemForm>
            <OpcoesExtra>
                <MyLink to={"/login"}>
                  Voltar para tela de login
                </MyLink>
            </OpcoesExtra>
          </ItemForm>
        </>
      </CadastroForm>
    </Container>
  );
};

export default TelaCadastro;
