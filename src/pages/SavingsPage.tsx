import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Button, ButtonGroup } from "@mui/material";
import { DataGrid, GridColDef, GridRowsProp } from "@mui/x-data-grid";
import ISaving from "../interfaces/ISaving";

const SavingsPage = () => {
  const rows: GridRowsProp<ISaving> = [
    {
      id: 1,
      amount: 3000,
      date: "26/07/2022",
    },
    {
      id: 2,
      amount: 5000,
      date: "28/07/2022",
    },
    {
      id: 3,
      amount: 9000,
      date: "29/07/2022",
    },
    {
      id: 4,
      amount: 15000,
      date: "30/07/2022",
    },
    {
      id: 5,
      amount: 50000,
      date: "01/08/2022",
    },
    {
      id: 6,
      amount: 40000,
      date: "03/08/2022",
    },
    {
      id: 9,
      amount: 6000,
      date: "05/08/2022",
    },
    {
      id: 10,
      amount: 50000,
      date: "15/08/2022",
    },
  ];
  const columns: GridColDef[] = [
    {
      field: "id",
      headerName: "ID",
      flex: 0.2,
    },
    {
      field: "amount",
      headerName: "Amount",
      flex: 1,
    },
    {
      field: "date",
      headerName: "Created at",
      flex: 1,
    },
  ];
  return (
    <Grid container item xs direction={"column"} height={"100%"}>
      <Grid item xs={1} padding={2}>
        <Typography variant="h4" color="initial" align="center">
          Savings
        </Typography>
      </Grid>
      <Grid item xs={8} padding={2}>
        <DataGrid columns={columns} rows={rows} />
      </Grid>
      <Grid
        container
        item
        sx={{ justifyContent: { xs: "center", sm: "flex-end" } }}
        xs={1}
        padding={2}
      >
        <Grid item>
          <ButtonGroup
            variant="contained"
            color="primary"
            aria-label="Savings Options"
          >
            <Button>Add Saving</Button>
            <Button variant="outlined">Use Savings</Button>
          </ButtonGroup>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SavingsPage;
