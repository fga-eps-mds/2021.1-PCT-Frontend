import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  flex: 1;
  display: flex;
  width: 100%;
  align-items: center;
  margin-top: 7rem;
  padding-left: 1rem;
  padding-right: 1rem;
  justify-content: space-evenly;

  /* top: 0;
  position: fixed;
  background-color: #edffd3; */

  @media screen and (max-width: 1024px) {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }

  @media screen and (max-width: 400px) {
    padding-left: 0.2rem;
    padding-right: 0.2rem;
  }
`;

export const CadastroForm = styled.form `
    display: block;
    padding: 2%;
    width: 40%;
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.2), 0 7px 26px 0 rgba(0, 0, 0, 0.19);
    border-radius: 15px;
    align-items: center;
    justify-content: center;
    background-color: #f6ffe8;

    h3{
        text-align: center;
        color: #0c5738;
        font-size: 30px;
        margin-bottom: 3%;
    }

    p { 
      text-align: center;
      color: #1bc47d;
      font-size: 14px;
      margin-bottom: 3%;
    }
`;

export const ItemForm = styled.div `
    width: 100%;
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const MyLink = styled(Link)`
  color: #1bc47d;
  font-size: 0.9rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;

  @media screen and (max-width: 1024px) {
    font-size: 1rem;
  }

  @media screen and (max-width: 400px) {
    font-size: 0.8rem;
  }
`;

export const Input = styled.input `
    width: 100%;
    font-size: 17px;
    padding: 0.9em;
    margin-top: 1em;
    border: solid 1.5px;
    border-color: #ededed;
    border-radius: 3px;
`;

export const BotaoCadastrar = styled.button `
    width: 100%;
    height: auto;
    border-radius: 0.5rem;
    padding: 1.5%;
    margin: 2%;
    margin-top: 5%;
    margin-left: 0;
    border: none;
    cursor: pointer;
    font-weight: 600;
    font-size: 0.9rem;
    color: #fff;
    background-color: #1bc47d;

    &:hover {
      background-color: #19b171;
    }
`;

export const OpcoesExtra = styled.li `
    color: #0062cc;
    font-weight: 600;
    margin-top: 5%;
    margin-bottom: 2%;
    text-decoration: none;
    text-align: center;
    list-style: none;
`;
