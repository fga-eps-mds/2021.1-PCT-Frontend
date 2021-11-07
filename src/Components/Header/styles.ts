import styled from "styled-components";
import { Link } from "react-router-dom";
import { NavDropdown } from "react-bootstrap";

export const Container = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: row;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 1rem;
  margin-bottom: 1rem;
  justify-content: space-evenly;

  @media screen and (max-width: 1024px) {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }

  @media screen and (max-width: 400px) {
    padding-left: 0.2rem;
    padding-right: 0.2rem;
  }
`;

export const Title = styled.div`
  flex: 0.7;
  border: none;
  display: flex;
  color: #004346;
  align-items: center;
  justify-content: center;
`;

export const LogoImage = styled.img`
  width: 100%;
`;

export const UserButton = styled.div`
  color: #004346;
  display: flex;
  font-size: 1.1rem;
  text-align: center;

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

export const MyLink = styled(Link)`
  color: #1bc47d;
  font-size: 1.2rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  height: fit-content;

  @media screen and (max-width: 1024px) {
    font-size: 1rem;
  }

  @media screen and (max-width: 400px) {
    font-size: 0.8rem;
  }
`;

export const NavItem = styled.div`
  color: #004346;
  display: flex;
  margin-right: 1rem;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 1024px) {
    margin-bottom: 0.5rem;
  }
`;

export const CustomNavDropdown = styled(NavDropdown)`
  color: #1bc47d;
  font-size: 1.2rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;

  a {
    text-align: center !important;
  }

  @media screen and (max-width: 1024px) {
    font-size: 1rem;
  }

  @media screen and (max-width: 400px) {
    font-size: 0.8rem;
  }

  a {
    color: #1bc47d !important;
    text-align: start;
  }
`

export const PersonIcon = styled.img`
  height: 1.1rem;
  max-height: 1rem;
  width: 1rem;
  max-width: 1rem;
  @media screen and (max-width: 1024px) {
    height: 1rem;
  }

  @media screen and (max-width: 400px) {
    height: 0.8rem;
  }
`;
