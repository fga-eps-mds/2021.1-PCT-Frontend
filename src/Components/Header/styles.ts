import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding-right: 20px;
  padding-left: 30px;
  max-height: 60px;
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.div`
  width: 40%;
  border: none;
  color: #1bc47d;
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  height: 100%;
  align-items: center;
  display: flex;
`;

export const ButtonsContainer = styled.div`
  width: 50%;
  height: 100%;
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
  text-align: center;
  font-size: 16px;
  height: 100%;
  align-items: center;
  width: 33.2%;
  background-color: #edffd3;
`;

export const ProfileButton = styled.button`
  border-radius: 8px;
  display: flex;
  color: white;
  text-align: center;
  font-size: 16px;
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
