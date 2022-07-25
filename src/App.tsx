import { CssBaseline, Paper } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./router/AppRouter";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <CssBaseline />
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
