import styled from "styled-components";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";


export const Container = styled.div`
  height: 100vh;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const LoginForm = styled(Form) `
    display: block;
    padding: 2%;
    width: 100%;
    box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 9px 26px 0 rgba(0, 0, 0, 0.19);
    border-radius: 15px;
    align-items: center;
    justify-content: center;
    background-color: #f6ffe8;

    h3{
        text-align: center;
        color: #0c5738;
        font-size: 27px;
        margin-bottom: 3%;
    }
`;

export const ItemForm = styled.div `
    width: 100%;
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const ItemFormOptions = styled.div `
    width: 100%;
    margin-top: 3%;
    margin-bottom: 1%;
    flex: 1;
    align-items: center;
    justify-content: center;

    ul { 
      display: grid;
      grid-template-columns: 1fr 1fr;
      list-style: none;
    }
`;

export const MyLink = styled(Link)`
  color: #1bc47d;
  font-size: 0.9rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;

  &:hover {
    color: #13965f;
    font-size: 14px;
  }

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

export const BotaoLogar = styled.button `
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
    text-decoration: none;
    text-align: center;
`;
