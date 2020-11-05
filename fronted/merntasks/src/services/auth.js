import axios from "axios";

export const authLogin = async ({ email = "", password = "" }) => {
  const user = await axios.post("/sessions/current", {
    email,
    password,
  });
  return user;
};
