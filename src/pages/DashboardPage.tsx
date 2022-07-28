import { Grid } from "@mui/material";

import "../styles/pages/MainPage.css";
import Cards from "../components/dashboard-page/Cards";
import ChartGroup from "../components/dashboard-page/ChartGroup";

const DashboardPage = () => {
  return (
    <>
      <Grid
        container
        item
        justifyContent={"space-between"}
        alignItems={"start"}
        columnSpacing={2}
        rowSpacing={2}
        padding={2}
        flexWrap="wrap"
      >
        <Cards />
      </Grid>
      <Grid
        container
        item
        justifyContent={"space-between"}
        padding={2}
        sx={{ justifyContent: { xs: "center", sm: "center" } }}
      >
        <ChartGroup />
      </Grid>
    </>
  );
};

export default DashboardPage;
