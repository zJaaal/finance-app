import { Grid, Typography, Button } from "@mui/material";
import { GridRowsProp, GridColDef, DataGrid } from "@mui/x-data-grid";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../reducers/rootReducer";
import { modalOpen } from "../actions/ui/modal";
import {
  cleanActiveEarning,
  selectActiveEarning,
  deleteEarning,
} from "../actions/earning/earning";
import EarningsModal from "../components/earnings-page/EarningsModal";
import IPayment from "../interfaces/IPayment";
import IEarning from "../reducers/earning/IEarning";

const EarningsPage = () => {
  const dispatch = useDispatch();
  const earning: IEarning = useSelector((state: IRootState) => state.earning);

  const handleClick = () => {
    dispatch(modalOpen());
  };
  const handleDelete = () => {
    dispatch(deleteEarning());
  };

  const handleRowClick = () => {
    dispatch(cleanActiveEarning());
  };
  const handleDoubleClick = ({ row }: { row: IPayment }) => {
    console.log(row);
    dispatch(selectActiveEarning(row));
  };

  const rows: GridRowsProp<IPayment> = earning.earnings;
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
        <DataGrid
          columns={columns}
          rows={rows}
          onRowClick={handleRowClick}
          onRowDoubleClick={handleDoubleClick}
          disableSelectionOnClick
        />
      </Grid>
      <Grid
        container
        item
        sx={{ justifyContent: { xs: "center", sm: "flex-end" } }}
        xs={1}
        padding={2}
      >
        <Grid item marginRight={1}>
          <Button
            variant={"contained"}
            onClick={handleDelete}
            color="error"
            disabled={!earning.activeEarning}
          >
            Delete
          </Button>
        </Grid>
        <Grid item>
          <Button variant={"contained"} onClick={handleClick}>
            {!earning.activeEarning ? "Add Earning" : "Update"}
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default EarningsPage;
