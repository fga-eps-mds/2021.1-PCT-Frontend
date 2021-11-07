import jwt_decode from "jwt-decode";

const userIsAuthenticated = () => {
  try {
    const token = localStorage.getItem("acessToken");
    const userId = localStorage.getItem("userID");
    const tokenDesc: any = jwt_decode(token || "");

    return String(userId) === String(tokenDesc["user_id"]);
  } catch {
    return false;
  }
};

export default userIsAuthenticated;
