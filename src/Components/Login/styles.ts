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

export const LoginForm = styled.div `
    display: block;
    padding: 2%;
    width: 50%;
    height: 60%;
    box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 9px 26px 0 rgba(0, 0, 0, 0.19);
    align-items: center;
    justify-content: center;

    h3{
        text-align: center;
        color: #1bc47d;
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
    padding: 0.5em;
    margin-top: 1em;
    border: none;
    border-radius: 3px;
`;

export const BotaoLogar = styled.button `
    width: 30%;
    height: auto;
    border-radius: 1rem;
    padding: 1.5%;
    margin: 2%;
    margin-left: 35%;
    border: none;
    cursor: pointer;
    font-weight: 600;
    font-size: 0.9rem;
    color: #fff;
    background-color: #0062cc;
`;

export const EsqueciSenha = styled.div `
    color: #0062cc;
    font-weight: 600;
    text-decoration: none;
    margin-left: 41%;
`;
