const { useState } = require("react");

export default (initialState) => {
  const [form, setForm] = useState(initialState);
  const handleChange = (e) => {
    const {
      target: { name, value },
    } = e;
    setForm({ ...form, [name]: value });
  };
  const resetForm = async () => {
    setForm(initialState);
  };
  return { form, handleChange, resetForm };
};
