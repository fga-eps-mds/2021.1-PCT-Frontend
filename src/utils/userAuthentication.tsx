import jwt_decode from "jwt-decode";

const userIsAuthenticated = () => {
  try {
    const token = localStorage.getItem("acessToken");
    const userId = localStorage.getItem("userID");
    const tokenDesc: any = jwt_decode(token || "");

    console.log("USER ID:", userId);
    console.log("TOKEN USER ID:", tokenDesc["user_id"]);
    return String(userId) === String(tokenDesc["user_id"]);
  } catch {
    return false;
  }
};

export default userIsAuthenticated;
