import { Grid, Typography, Button } from "@mui/material";
import { GridRowsProp, GridColDef, DataGrid } from "@mui/x-data-grid";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../reducers/rootReducer";
import {
  earningDelete,
  earningSelectActive,
  earningCleanActive,
} from "../actions/earning/earning";
import EarningsModal from "../components/earnings-page/EarningsModal";
import IPayment from "../interfaces/IPayment";
import IEarningState from "../reducers/earning/IEarningState";
import EarningActions from "../actions/earning/enum/EarningActions";
import ModalType from "../hooks/open/ModalType";
import useOpen from "../hooks/open/useOpen";

const EarningsPage = () => {
  const dispatch = useDispatch();

  const earning: IEarningState = useSelector(
    (state: IRootState) => state.earning
  );

  const { isOpen, handleOpen, handleClose } = useOpen(
    earning.activeEarning ? ModalType.EARNING : ModalType.GENERAL
  );

  const handleDelete = () => {
    dispatch<earningDelete>({ type: EarningActions.EARNING_DELETE });
  };

  const handleRowClick = () => {
    dispatch<earningCleanActive>({ type: EarningActions.EARNING_CLEAN_ACTIVE });
  };
  const handleRowDoubleClick = ({ row }: { row: IPayment }) => {
    dispatch<earningSelectActive>({
      type: EarningActions.EARNING_SELECT_ACTIVE,
      payload: row,
    });
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
      type: "number",
      field: "amount",
      headerName: "Amount",
      flex: 1,
    },
    {
      type: "date",
      field: "date",
      headerName: "Created at",
      flex: 1,
    },
  ];
  return (
    <Grid container item xs direction={"column"} height={"100%"}>
      <EarningsModal isOpen={isOpen} handleClose={handleClose} />
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
          onRowDoubleClick={handleRowDoubleClick}
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
          <Button variant={"contained"} onClick={handleOpen}>
            {!earning.activeEarning ? "Add Earning" : "Update"}
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default EarningsPage;
