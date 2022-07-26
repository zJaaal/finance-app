import React from "react";
import { Grid } from "@mui/material";
import Chart from "./Chart";

const ChartGroup = () => {
  return (
    <>
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
    </>
  );
};

export default ChartGroup;
