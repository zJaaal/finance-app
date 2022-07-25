import { Grid, Paper, Typography, Button } from "@mui/material";

import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import SavingsIcon from "@mui/icons-material/Savings";
import PaymentIcon from "@mui/icons-material/Payment";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import PaidIcon from "@mui/icons-material/Paid";

import NavBar from "../components/main-page/NavBar";
import Chart from "../components/main-page/Chart";

import "../styles/pages/MainPage.css";

const DashboardPage = () => {
  return (
    <>
      <Grid
        container
        item
        justifyContent={"space-between"}
        alignItems={"center"}
        columnSpacing={2}
        rowSpacing={2}
        padding={2}
        flexWrap="wrap"
      >
        <Grid
          container
          item
          justifyContent={"center"}
          xs={12}
          sm={6}
          md={3}
          lg={3}
          xl={3}
          sx={{
            ".MuiPaper-rounded": { borderRadius: "15px" },
            justifyContent: { xs: "center", sm: "center" },
          }}
        >
          <Grid
            container
            direction="column"
            item
            sx={{ padding: "15px" }}
            className={"dashboard-card"}
          >
            <AccountBalanceWalletIcon
              sx={{ fontSize: 40, marginBottom: "10px" }}
              color="primary"
            />
            <Grid>
              <Typography
                variant="h4"
                sx={{ display: "inline-block", width: "200px" }}
                noWrap
                gutterBottom
              >
                $3.000.000,00
              </Typography>
            </Grid>
            <Typography variant="h6" color="initial">
              Balance
            </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          item
          justifyContent={"center"}
          xs={12}
          sm={6}
          md={3}
          lg={3}
          xl={3}
          sx={{
            ".MuiPaper-rounded": { borderRadius: "15px" },
          }}
        >
          <Grid
            container
            direction="column"
            item
            sx={{ padding: "15px" }}
            className={"dashboard-card"}
          >
            <SavingsIcon
              sx={{ fontSize: 40, marginBottom: "10px" }}
              color="success"
            />
            <Grid>
              <Typography
                variant="h4"
                sx={{ display: "inline-block", width: "200px" }}
                noWrap
                gutterBottom
              >
                $1.000,00
              </Typography>
            </Grid>
            <Typography variant="h6" color="initial">
              Saves
            </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          item
          justifyContent={"center"}
          xs={12}
          sm={6}
          md={3}
          lg={3}
          xl={3}
          sx={{
            ".MuiPaper-rounded": { borderRadius: "15px" },
            display: { xs: "none", sm: "flex" },
          }}
        >
          <Grid
            container
            direction="column"
            item
            sx={{ padding: "15px" }}
            className={"dashboard-card"}
          >
            <PaymentIcon
              sx={{ fontSize: 40, marginBottom: "10px" }}
              color="error"
            />
            <Grid>
              <Typography
                variant="h4"
                sx={{ display: "inline-block", width: "200px" }}
                noWrap
                gutterBottom
              >
                $2.000,00
              </Typography>
            </Grid>
            <Typography variant="h6">Debt</Typography>
          </Grid>
        </Grid>
        <Grid
          container
          item
          justifyContent={"center"}
          xs={12}
          sm={6}
          md={3}
          lg={3}
          xl={3}
          sx={{
            ".MuiPaper-rounded": { borderRadius: "15px" },
            display: { xs: "none", sm: "flex" },
          }}
        >
          <Grid
            container
            direction="column"
            item
            sx={{ padding: "15px" }}
            className={"dashboard-card"}
          >
            <AttachMoneyIcon
              sx={{ fontSize: 40, marginBottom: "10px" }}
              color="warning"
            />
            <Grid>
              <Typography
                variant="h4"
                sx={{ display: "inline-block", width: "200px" }}
                noWrap
                gutterBottom
              >
                $200
              </Typography>
            </Grid>
            <Typography variant="h6" color="initial">
              Month Expenses
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        container
        item
        justifyContent={"space-between"}
        padding={2}
        sx={{ justifyContent: { xs: "center", sm: "center" } }}
      >
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <Chart color="#1976d2" type="Balance" />
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={6}
          xl={6}
          sx={{ display: { xs: "none", md: "flex" } }}
        >
          <Chart color="#2e7d32" type="Saves" />
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={6}
          xl={6}
          sx={{ display: { xs: "none", md: "flex" } }}
        >
          <Chart color="#d32f2f" type="Debt" />
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={6}
          xl={6}
          sx={{ display: { xs: "none", md: "flex" } }}
        >
          <Chart color="#ed6c02" type="Expenses" />
        </Grid>
      </Grid>
    </>
  );
};

export default DashboardPage;
