import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;

  background-color: #172a3a;

  width: 80%;
  padding: 1%;

  margin-top: 0.7rem;
  border-radius: 10px;

  @media screen and (max-width: 1024px) {
    width: 100%;
    padding: 2%;
  }
`;

export const TitleDateContainer = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: none;
  border-radius: 15px;
`;

export const ResultTitle = styled.text`
  font-size: 1rem;
  font-weight: bold;
  font-style: normal;
  font-family: Rokkitt, sans-serif;

  width: 80%;
  height: 1rem;

  display: block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  color: #ffffff;

  @media screen and (max-width: 1024px) {
    font-size: 0.7rem;
  }
`;

export const ResultDate = styled.text`
  font-size: 1rem;
  font-weight: bold;
  font-style: normal;
  font-family: Rokkitt, sans-serif;

  width: 20%;
  display: block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  color: #ffffff;

  @media screen and (max-width: 1024px) {
    font-size: 0.5rem;
  }
`;

export const ResultDetails = styled.text`
  font-size: 1rem;
  font-style: normal;
  font-family: Rokkitt, sans-serif;

  width: 70%;
  display: block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  color: #ffffff;

  @media screen and (max-width: 1024px) {
    font-size: 0.5rem;
  }
`;

export const ResultLink = styled.a`
  font-size: 0.8rem;
  font-style: normal;
  font-weight: normal;
  font-family: Rokkitt, sans-serif;
  /* line-height: 0px; */
  /* identical to box height */

  width: 80%;
  color: #1bc47d;
  /* margin-top: 5px; */

  text-align: left;

  display: block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  @media screen and (max-width: 1024px) {
    font-size: 0.7rem;
  }
`;

export const ResultCategoriesText = styled.text`
  font-size: 1rem;
  font-weight: bold;
  font-style: normal;
  font-family: Rokkitt, sans-serif;
  /* line-height: 28px; */

  color: #ffffff;
  margin-top: 5px;

  @media screen and (max-width: 1024px) {
    font-size: 0.7rem;
  }
`;

export const ResultCategories = styled.div`
  /* width: 5%; */
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 100%;
  padding: 0.2rem;
  margin-top: 5px;
  margin-right: 5px;
  margin-bottom: 1%;
  border-radius: 10px;
  background-color: #1bc47d;

  text {
    font-size: 0.8rem;
    font-weight: bold;
    font-style: italic;
    font-family: Rokkitt, sans-serif;
    /* line-height: 16px; */

    color: #172a3a;
  }

  @media screen and (max-width: 1024px) {
    font-size: 0.7rem;

    text {
      font-size: 0.6rem;
    }
  }
`;

export const ResultCategoriesContainer = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
