import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  padding-left: 1%;
  padding-right: 1%;
  flex-direction: column;
  align-items: flex-start;
  background-color: #172a3a;
  justify-content: space-around;
  width: 80%;
  height: 90px;
  max-height: 20%;
  margin-top: 10px;
  border-radius: 10px;
`;

export const TitleDateContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const ResultTitle = styled.text`
  font-family: Rokkitt, sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size: 26px;
  line-height: 28px;

  color: #ffffff;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ResultDate = styled.text`
  font-family: Rokkitt, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
  line-height: 28px;

  color: #ffffff;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ResultLink = styled.a`
  font-family: Rokkitt, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 0px;
  /* identical to box height */
  flex: 1;
  color: #1bc47d;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ResultCategoriesText = styled.text`
  font-family: Rokkitt, sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size: 22px;
  line-height: 28px;
  flex: 1;

  color: #ffffff;
`;

export const ResultCategories = styled.div`
  width: 5%;
  height: 100%;
  display: flex;
  margin-right: 5px;
  align-items: center;
  border-radius: 10px;
  justify-content: center;
  background-color: #1bc47d;
  /* flex: 1; */

  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2px;

  text {
    font-family: Rokkitt, sans-serif;
    font-style: italic;
    font-weight: bold;
    font-size: 12px;
    line-height: 16px;

    color: #172a3a;
  }
`;

export const ResultCategoriesContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  width: 100%;
`;
