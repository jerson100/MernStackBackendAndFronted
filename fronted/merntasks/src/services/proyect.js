import axios from "axios";

const add = async ({ name }) => {
  return await axios.post("/proyects", { name });
};

const remove = async ({ _id }) => {
  return await axios.delete(`/proyects/${_id}`);
};

const all = async () => {
  return await axios.get("/proyects");
};

export default {
  add,
  remove,
  all,
};
