import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding-right: 20px;
  padding-left: 20px;
  max-height: 60px;
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  align-items: center;
  text-align: center;
  border: none;
  color: #004346;
  font-size: 20px;
  font-weight: bold;
  font-family: Rokkitt, sans-serif;
`;

export const LogoImage = styled.img`
  width: 60%;
  margin-left: 5%;
`;

export const ButtonsContainer = styled.div`
  width: 50%;
  height: 100%;
  border: none;
  font-family: Rokkitt, sans-serif;
  align-items: center;
  justify-content: space-between;
  display: flex;
  flex-direction: row;
  background-color: black;
`;

export const ProfileCotainer = styled.div`
  width: 10%;
  height: 100%;
  align-items: center;
  display: flex;
`;

export const HeaderButton = styled.button`
  border: none;
  color: #1bc47d;
  width: 33.2%;
  height: 100%;
  display: flex;
  font-weight: bold;
  align-items: center;
  justify-content: center;
  background-color: #edffd3;

  p {
    font-size: 22px;
    cursor: pointer;
    text-align: center;
  }
`;

export const ProfileButton = styled.button`
  border-radius: 8px;
  display: flex;
  color: white;
  text-align: center;
  font-size: 20px;
  height: 100%;
  align-items: center;
  justify-content: center;
  width: 80%;
  background-color: #004346;
`;

export const PersonIcon = styled.img`
  height: 22px;
  max-height: 40px;
  width: 22px;
  max-width: 40px;
  margin-left: 5px;
`;
