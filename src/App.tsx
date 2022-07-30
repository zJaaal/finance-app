import { CssBaseline, Paper } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./router/AppRouter";
import StoreProvider from "./store/StoreProvider";

function App() {
  return (
    <BrowserRouter>
      <StoreProvider>
        <CssBaseline />
        <AppRouter />
      </StoreProvider>
    </BrowserRouter>
  );
}

export default App;
