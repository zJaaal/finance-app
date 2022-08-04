import { Grid } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import NavBar from "../components/layout/NavBar";
import DashboardPage from "../pages/private-pages/DashboardPage";
import DebtsPage from "../pages/private-pages/DebtsPage";
import EarningsPage from "../pages/private-pages/EarningsPage";
import ExpensesPage from "../pages/private-pages/ExpensesPage";
import PaymentsPage from "../pages/private-pages/PaymentsPage";
import SavingsPage from "../pages/private-pages/SavingsPage";
import SettingsPage from "../pages/private-pages/SettingsPage";

const DashboardRoutes = () => {
  return (
    <>
      <Grid item width={"100%"} xs={1}>
        <NavBar />
      </Grid>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="earnings" element={<EarningsPage />} />
        <Route path="expenses" element={<ExpensesPage />} />
        <Route path="debts" element={<DebtsPage />} />
        <Route path="savings" element={<SavingsPage />} />
        <Route path="settings" element={<SettingsPage />} />
        <Route path="payments/:debtId" element={<PaymentsPage />} />
      </Routes>
    </>
  );
};

export default DashboardRoutes;
