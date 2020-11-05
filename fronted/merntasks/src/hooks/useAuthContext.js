const { useContext } = require("react");
const { AuthContext } = require("../providers/AuthProvider");

const useAuthContext = () => {
  const values = useContext(AuthContext);
  if (!values) {
    throw new Error("El componente no tiene acceso al contexto AuthContext");
  } else {
    return values;
  }
};

export default useAuthContext;
