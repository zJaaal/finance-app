import React from "react";
import { Grid } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import NavBar from "../components/main-page/NavBar";
import DashboardPage from "../pages/DashboardPage";
import LoginPage from "../pages/LoginPage";
import ExpensesPage from "../pages/ExpensesPage";
import DebtsPage from "../pages/DebtsPage";
import SavingsPage from "../pages/SavingsPage";
import SettingsPage from "../pages/SettingsPage";

const AppRouter = () => {
  return (
    <>
      <NavBar />
      <Grid container height={"100vh"}>
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/expenses" element={<ExpensesPage />} />
          <Route path="/debts" element={<DebtsPage />} />
          <Route path="/savings" element={<SavingsPage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Routes>
      </Grid>
    </>
  );
};

export default AppRouter;
