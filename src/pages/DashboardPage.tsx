import { Grid } from "@mui/material";

import "../styles/pages/MainPage.css";
import Cards from "../components/dashboard-page/Cards";
import ChartGroup from "../components/dashboard-page/ChartGroup";

const DashboardPage = () => {
  return (
    <Grid container item xs direction={"column"} justifyContent={"flex-start"}>
      <Grid item xs={3}>
        <Cards />
      </Grid>
      <Grid item xs container>
        <ChartGroup />
      </Grid>
    </Grid>
  );
};

export default DashboardPage;
