import { Grid } from "@mui/material";

import Cards from "../../components/dashboard-page/Cards";
import ChartGroup from "../../components/dashboard-page/ChartGroup";
import "../../styles/pages/MainPage.css";

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
