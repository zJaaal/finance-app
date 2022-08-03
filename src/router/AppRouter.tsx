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
import EarningsPage from "../pages/EarningsPage";
import PaymentsPage from "../pages/PaymentsPage";
import DashboardRoutes from "./DashboardRoutes";

const AppRouter = () => {
  return (
    <Grid container direction={"column"} height={"inherit"}>
      {/* This bar should be online on Private Routes */}
      <Routes>
        {/* Private Routes */}
        <Route path="/*" element={<DashboardRoutes />} />

        {/* Public Routes */}
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Grid>
  );
};

export default AppRouter;
