import { Grid, Typography, ButtonGroup, Button } from "@mui/material";
import { GridRowsProp, GridColDef, DataGrid } from "@mui/x-data-grid";
import React from "react";
import IPayment from "../interfaces/IPayment";

const PaymentsPage = () => {
  const rows: GridRowsProp<IPayment> = [
    {
      id: 1,
      title: "Salary",
      description: "",
      amount: 100000,
      date: "26/07/2022",
    },
    {
      id: 2,
      title: "Some payment I got from mentoring",
      description: "",
      amount: 5000,
      date: "28/07/2022",
    },
    {
      id: 3,
      title: "salary",
      description: "",
      amount: 100000,
      date: "29/07/2022",
    },
    {
      id: 4,
      title: "Mentoring",
      description: "",
      amount: 15000,
      date: "30/07/2022",
    },
    {
      id: 5,
      title: "50% of payment",
      description: "Diego's web page",
      amount: 50000,
      date: "01/08/2022",
    },
    {
      id: 6,
      title: "Favor I did to Diego",
      description: "",
      amount: 40000,
      date: "03/08/2022",
    },
    {
      id: 9,
      title: "Mentoring payment",
      description: "",
      amount: 6000,
      date: "05/08/2022",
    },
    {
      id: 10,
      title: "30% of work",
      description: "Alberto's page",
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
      field: "title",
      headerName: "Title",
      flex: 1,
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
          Payments
        </Typography>
      </Grid>
      <Grid item xs={9} padding={2}>
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
          <Button variant={"contained"}>Add Payment</Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default PaymentsPage;
