import { Grid, Typography, Button } from "@mui/material";
import { GridRowsProp, GridColDef, DataGrid } from "@mui/x-data-grid";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../reducers/rootReducer";
import ModalType from "../hooks/open/ModalType";
import useOpen from "../hooks/open/useOpen";
import IExpense from "../interfaces/IExpense";
import ExpensesModal from "../components/expenses-page/ExpensesModal";
import IExpenseState from "../reducers/expense/IExpenseState";
import {
  expenseCleanActive,
  expenseDelete,
  expenseSelectActive,
} from "../actions/expense/expense";
import ExpenseActions from "../actions/expense/enum/ExpenseActions";

const ExpensesPage = () => {
  const dispatch = useDispatch();

  const expense: IExpenseState = useSelector(
    (state: IRootState) => state.expense
  );

  const { isOpen, handleOpen, handleClose } = useOpen(
    expense.activeExpense ? ModalType.EXPENSE : ModalType.GENERAL
  );

  const handleDelete = () => {
    dispatch<expenseDelete>({ type: ExpenseActions.EXPENSE_DELETE });
  };

  const handleRowClick = () => {
    dispatch<expenseCleanActive>({ type: ExpenseActions.EXPENSE_CLEAN_ACTIVE });
  };
  const handleRowDoubleClick = ({ row }: { row: IExpense }) => {
    dispatch<expenseSelectActive>({
      type: ExpenseActions.EXPENSE_SELECT_ACTIVE,
      payload: row,
    });
  };

  const rows: GridRowsProp<IExpense> = expense.expenses;
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
      <ExpensesModal isOpen={isOpen} handleClose={handleClose} />
      <Grid item xs={1} padding={2}>
        <Typography variant="h4" color="initial" align="center">
          Expenses
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
            disabled={!expense.activeExpense}
          >
            Delete
          </Button>
        </Grid>
        <Grid item>
          <Button variant={"contained"} onClick={handleOpen}>
            {!expense.activeExpense ? "Add Expense" : "Update"}
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ExpensesPage;
