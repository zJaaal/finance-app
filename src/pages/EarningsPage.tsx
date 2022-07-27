import { Grid, Typography, ButtonGroup, Button } from "@mui/material";
import { GridRowsProp, GridColDef, DataGrid } from "@mui/x-data-grid";
import { useDispatch } from "react-redux";
import { modalOpen } from "../actions/ui/modal";
import EarningsModal from "../components/earnings-page/EarningsModal";
import IPayment from "../interfaces/IPayment";

const EarningsPage = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(modalOpen());
  };

  const rows: GridRowsProp<IPayment> = [
    {
      id: 1,
      title: "Salary",
      description: "",
      amount: 100000,
      date: "07/26/2022",
    },
    {
      id: 2,
      title: "Some payment I got from mentoring",
      description: "",
      amount: 5000,
      date: "07/28/2022",
    },
    {
      id: 3,
      title: "salary",
      description: "",
      amount: 100000,
      date: "07/29/2022",
    },
    {
      id: 4,
      title: "Mentoring",
      description: "",
      amount: 15000,
      date: "07/30/2022",
    },
    {
      id: 5,
      title: "50% of payment",
      description: "Diego's web page",
      amount: 50000,
      date: "08/01/2022",
    },
    {
      id: 6,
      title: "Favor I did to Diego",
      description: "",
      amount: 40000,
      date: "08/03/2022",
    },
    {
      id: 9,
      title: "Mentoring payment",
      description: "",
      amount: 6000,
      date: "08/05/2022",
    },
    {
      id: 10,
      title: "30% of work",
      description: "Alberto's page",
      amount: 50000,
      date: "08/15/2022",
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
      <EarningsModal />
      <Grid item xs={1} padding={2}>
        <Typography variant="h4" color="initial" align="center">
          Earnings
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
          <Button variant={"contained"} onClick={handleClick}>
            Add Earning
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default EarningsPage;
