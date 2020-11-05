import axios from "axios";

export const whoIAm = async () => {
  const user = await axios.get("/users/whoIAm");
  return user;
};

export const createUser = async ({
  email = "",
  name = "",
  password = "",
  password_confirmation = "",
}) => {
  const user = await axios.post("/users", {
    email,
    name,
    password,
    password_confirmation,
  });
  return user;
};
