import React from "react";
import { Grid } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import LoginPage from "../pages/public-pages/LoginPage";
import DashboardRoutes from "./DashboardRoutes";
import PrivateRoutes from "./PrivateRoutes";
import PublicRoutes from "./PublicRoutes";
import AuthRoutes from "./AuthRoutes";

const AppRouter = () => {
  return (
    <Grid container direction={"column"} height={"inherit"}>
      {/* This bar should be online on Private Routes */}
      <Routes>
        {/* Private Routes */}
        <Route
          path="/*"
          element={
            <PrivateRoutes>
              <DashboardRoutes />
            </PrivateRoutes>
          }
        />

        {/* Public Routes */}
        <Route
          path="/auth/*"
          element={
            <PublicRoutes>
              <AuthRoutes />
            </PublicRoutes>
          }
        />
      </Routes>
    </Grid>
  );
};

export default AppRouter;
