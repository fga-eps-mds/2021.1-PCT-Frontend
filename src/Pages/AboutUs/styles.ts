import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  height: 130vh;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  height: auto;
`;

export const CardContainer = styled.div`
  width: 80%;
  border: none;
  border-radius: 15px;
  margin-bottom: 5%;
  margin-top: 3%;
  flex-direction: column;
  display: flex;
  background-color: #172A3A;
  align-items: center;
`;

export const CardHeader = styled.div`
  justify-content: center; 
  padding-top: 2%;
  margin-bottom: 4%;
  width: 80%;
  align-items: center;
  text-align: center;
`;

export const Card = styled.div`
  width: 70%;
  border: none;
  border-radius: 15px;
  flex-direction: row;
  margin-left: -12%;
  flex: 1;
  display: flex;
  justify-content: space-between;
`;

export const TitleInfo = styled.div`
  margin-top: 40px;
  text-align: justify;
  color: #1bc47d;
  font-size: 18px;
  color: #FFFFFF;
  text-align: center;
`;

export const DescriptionInfo = styled.div`
  color: #FFFFFF;
  margin-top: 5%;
  text-align: justify;
  font-size: 15px;
`;

export const Image = styled.div`
  border-radius: 60%;
  margin-bottom: 5%;
`;

export const ContactsInfo = styled.div`
  text-align: center;
  color: #FFFFFF;
  font-size: 15px;
  margin-top: 15%;
`;

export const Contacts = styled.div`
  align-items: center;
  flex-direction: column;
  flex: 1;
  display: flex;
  margin: 5%;
`;

export const ConfigImage = styled.img`
  height: 4.0rem;
  width: 4.0rem;

  @media screen and (max-width: 1024px) {
    height: 1rem;
    width: 1rem;
  }
`;













	
