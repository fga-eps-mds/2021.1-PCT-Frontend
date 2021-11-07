import jwt_decode from "jwt-decode";

export type LoginResponse = {
  refresh: string;
  access: string;
};

export const saveSession = (data: LoginResponse) => {
  const accessDesc: any = jwt_decode(data?.access);
  localStorage.setItem("acessToken", data?.access);
  localStorage.setItem("refreshToken", data?.refresh);
  localStorage.setItem("userID", accessDesc["user_id"]);
};

export const userIsAuthenticated = () => {
  try {
    const token = localStorage.getItem("acessToken");
    const userId = localStorage.getItem("userID");
    const tokenDesc: any = jwt_decode(token || "");

    return String(userId) === String(tokenDesc["user_id"]);
  } catch {
    return false;
  }
};

export const getUserToken = () => {
  return localStorage.getItem("acessToken");
};

export const getUserRefreshToken = () => {
  return localStorage.getItem("refreshToken");
};

export default userIsAuthenticated;
