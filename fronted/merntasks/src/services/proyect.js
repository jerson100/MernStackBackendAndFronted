import axios from "axios";

const add = async ({ name }) => {
  return await axios.post("/proyects", { name });
};

const remove = async ({ _id }) => {
  return await axios.delete(`/proyects/${_id}`);
};

const all = async (id) => {
  return await axios.get(`/users/${id}/proyects`);
};

export default {
  add,
  remove,
  all,
};
