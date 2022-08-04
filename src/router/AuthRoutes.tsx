import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginPage from "../pages/public-pages/LoginPage";
import RegisterPage from "../pages/public-pages/RegisterPage";

const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
};

export default AuthRoutes;
