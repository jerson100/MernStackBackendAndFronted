import React from "react";

import AppRouter from "./routers/AppRouter";

import { initInterceptors } from "./services/interceptors";

//interceptar las peticiones y respuestas...
initInterceptors();

function App() {
  return <AppRouter />;
}

export default App;
