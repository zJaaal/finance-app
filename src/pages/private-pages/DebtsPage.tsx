import { Grid, Typography, Button } from "@mui/material";
import {
  GridRowsProp,
  GridColDef,
  DataGrid,
  GridRenderCellParams,
} from "@mui/x-data-grid";
import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";
import {
  debtDeleteActive,
  debtCleanActive,
  debtSelectActive,
} from "../../actions/debt/debtActions";
import DebtActions from "../../actions/debt/enum/DebtActions";
import DebtsModal from "../../components/debts-page/DebtsModal";
import ModalType from "../../hooks/open/ModalType";
import useOpen from "../../hooks/open/useOpen";
import IDebt from "../../interfaces/IDebt";
import IDebtState from "../../reducers/debt/IDebtState";
import { IRootState } from "../../reducers/rootReducer";

const DebtsPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const debt: IDebtState = useSelector((state: IRootState) => state.debt);

  const { isOpen, handleOpen, handleClose } = useOpen(
    debt.activeDebt ? ModalType.DEBT : ModalType.GENERAL
  );

  const handlePay = () => {
    navigate(`/payments/${debt.activeDebt?.id}`);
  };
  const handleDelete = () => {
    dispatch<debtDeleteActive>({ type: DebtActions.DEBT_DELETE_ACTIVE });
  };

  const handleRowClick = () => {
    dispatch<debtCleanActive>({ type: DebtActions.DEBT_CLEAN_ACTIVE });
  };
  const handleRowDoubleClick = ({ row }: { row: IDebt }) => {
    dispatch<debtSelectActive>({
      type: DebtActions.DEBT_SELECT_ACTIVE,
      payload: row,
    });
  };

  const rows: GridRowsProp<IDebt> = debt.debts;
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
      headerName: "Current Debt",
      flex: 1,
    },
    {
      type: "date",
      field: "date",
      headerName: "Created at",
      flex: 1,
    },
    {
      type: "boolean",
      field: "paid",
      headerName: "Status",
      flex: 0.4,
      renderCell: (params: GridRenderCellParams<boolean>) => (
        <Typography
          variant="body1"
          sx={{
            color: `${params.value ? "green" : "red"}`,
          }}
        >
          {params.value ? "Paid" : "Active"}
        </Typography>
      ),
    },
  ];
  return (
    <Grid container item xs direction={"column"} height={"100%"}>
      <DebtsModal isOpen={isOpen} handleClose={handleClose} />
      <Grid item xs={1} padding={2}>
        <Typography variant="h4" color="initial" align="center">
          Debts
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
        <Grid item>
          <Button
            variant={"contained"}
            onClick={handleDelete}
            color="error"
            disabled={!debt.activeDebt}
          >
            Delete
          </Button>
        </Grid>
        <Grid item marginRight={1} marginLeft={1}>
          <Button
            variant={"contained"}
            onClick={handlePay}
            color="success"
            disabled={!debt.activeDebt}
          >
            {debt.activeDebt?.paid ? "Payments" : "Pay"}
          </Button>
        </Grid>
        <Grid item>
          <Button variant={"contained"} onClick={handleOpen}>
            {!debt.activeDebt ? "Add Debt" : "Update"}
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default DebtsPage;
