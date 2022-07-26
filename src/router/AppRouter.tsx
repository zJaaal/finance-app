import React from "react";
import { Grid } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import NavBar from "../components/layout/NavBar";
import DashboardPage from "../pages/DashboardPage";
import LoginPage from "../pages/LoginPage";
import ExpensesPage from "../pages/ExpensesPage";
import DebtsPage from "../pages/DebtsPage";
import SavingsPage from "../pages/SavingsPage";
import SettingsPage from "../pages/SettingsPage";
import PaymentsPage from "../pages/PaymentsPage";

const AppRouter = () => {
  return (
    <Grid container direction={"column"} height={"inherit"}>
      <NavBar />
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/payments" element={<PaymentsPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/expenses" element={<ExpensesPage />} />
        <Route path="/debts" element={<DebtsPage />} />
        <Route path="/savings" element={<SavingsPage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Routes>
    </Grid>
  );
};

export default AppRouter;
