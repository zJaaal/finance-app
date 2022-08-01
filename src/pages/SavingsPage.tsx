import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { IRootState } from "../reducers/rootReducer";
import { useDispatch, useSelector } from "react-redux";
import { DataGrid, GridColDef, GridRowsProp } from "@mui/x-data-grid";

import SavingsModal from "../components/savings-page/SavingsModal";
import ISavingState from "../reducers/saving/ISavingState";
import ISaving from "../interfaces/ISaving";
import {
  savingCleanActive,
  savingDelete,
  savingSelectActive,
} from "../actions/saving/saving";
import SavingActions from "../actions/saving/enum/SavingActions";
import useOpen from "../hooks/open/useOpen";
import ModalType from "../hooks/open/ModalType";

const SavingsPage = () => {
  const dispatch = useDispatch();
  const saving: ISavingState = useSelector((state: IRootState) => state.saving);

  const { isOpen, handleOpen, handleClose } = useOpen(
    saving.activeSaving ? ModalType.SAVING : ModalType.GENERAL
  );

  const handleDelete = () => {
    dispatch<savingDelete>({ type: SavingActions.SAVING_DELETE });
  };

  const handleRowClick = () => {
    dispatch<savingCleanActive>({ type: SavingActions.SAVING_CLEAN_ACTIVE });
  };
  const handleRowDoubleClick = ({ row }: { row: ISaving }) => {
    dispatch<savingSelectActive>({
      type: SavingActions.SAVING_SELECT_ACTIVE,
      payload: row,
    });
  };

  const rows: GridRowsProp<ISaving> = saving.savings;
  const columns: GridColDef[] = [
    {
      field: "id",
      headerName: "ID",
      flex: 0.2,
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
      <SavingsModal isOpen={isOpen} handleClose={handleClose} />
      <Grid item xs={1} padding={2}>
        <Typography variant="h4" color="initial" align="center">
          Savings
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
            disabled={!saving.activeSaving}
          >
            Delete
          </Button>
        </Grid>
        <Grid item>
          <Button variant="contained" onClick={handleOpen}>
            {!saving.activeSaving ? "Add Saving" : "Update Saving"}
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SavingsPage;
