import styled from "styled-components";
import Flatlist from "flatlist-react";

export const Container = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: column;

  position: relative;
`;

export const SearchAreaContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  
  width: 60%;
  
  overflow: auto;
  overflow-x: hidden;
  
  margin-bottom: 1rem;
  
  @media screen and (max-width: 640px) {
    width: 100%;
    padding: 2%;
  }
`;

export const NewResultsContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  
  width: 80%;
  
  overflow: auto;
  overflow-x: hidden;
  
  margin-bottom: 1rem;
  
  @media screen and (max-width: 1024px) {
    width: 100%;
    padding: 2%;
  }
`;

export const NewsTitle = styled.p`
  flex: 1;
  margin-bottom: 0.2%;
  align-self: flex-start;

  color: #004346;
  font-size: 1.5rem;
  font-weight: bold;
  font-style: normal;
  line-height: 1.5rem;
  font-family: Rokkitt, sans-serif;

  @media screen and (max-width: 1024px) {
    margin-left: 5%;
  }
`;

export const MyFlatlist = styled(Flatlist)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: aliceblue;
`;
