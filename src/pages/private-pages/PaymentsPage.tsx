import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Grid, Typography, Button } from "@mui/material";
import { GridRowsProp, GridColDef, DataGrid } from "@mui/x-data-grid";
import { useEffect } from "react";
import PaymentActions from "../../actions/payment/enum/PaymentActions";
import {
  paymentsLoaded,
  paymentCleanActive,
  paymentDeleteActive,
  paymentSelectActive,
} from "../../actions/payment/paymentActions";
import PaymentsModal from "../../components/payments-page/PaymentsModal";
import ModalType from "../../hooks/open/ModalType";
import useOpen from "../../hooks/open/useOpen";
import IDebt from "../../interfaces/IDebt";
import IPayment from "../../interfaces/IPayment";
import IPaymentState from "../../reducers/payment/IPaymentState";
import { IRootState } from "../../reducers/rootReducer";

const PaymentsPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const { debtId } = useParams();

  //This wont work like this, I'll fetch the info with the id of the debt
  //Thats why I use useParams, for testing reasons i'll get the info from the store

  const { activeDebt }: { activeDebt: IDebt | null } = useSelector(
    (state: IRootState) => state.debt
  );

  const payment: IPaymentState = useSelector(
    (state: IRootState) => state.payment
  );

  const { isOpen, handleOpen, handleClose } = useOpen(
    payment.activePayment ? ModalType.PAYMENT : ModalType.GENERAL
  );

  useEffect(() => {
    if (!activeDebt) {
      navigate(-1);
    }

    dispatch<paymentsLoaded>({
      type: PaymentActions.PAYMENTS_LOADED,
      payload: activeDebt?.payments || [],
    });

    return () => {
      dispatch<paymentsLoaded>({
        type: PaymentActions.PAYMENTS_LOADED,
        payload: [],
      });
      dispatch<paymentCleanActive>({
        type: PaymentActions.PAYMENT_CLEAN_ACTIVE,
      });
    };
  }, [dispatch]);

  const handleDelete = () => {
    dispatch<paymentDeleteActive>({
      type: PaymentActions.PAYMENT_DELETE_ACTIVE,
    });
  };

  const handleRowClick = () => {
    dispatch<paymentCleanActive>({ type: PaymentActions.PAYMENT_CLEAN_ACTIVE });
  };
  const handleRowDoubleClick = ({ row }: { row: IPayment }) => {
    dispatch<paymentSelectActive>({
      type: PaymentActions.PAYMENT_SELECT_ACTIVE,
      payload: row,
    });
  };

  const rows: GridRowsProp<IPayment> = payment.payments;
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
      <PaymentsModal isOpen={isOpen} handleClose={handleClose} />
      <Grid item xs={1} padding={2}>
        <Typography variant="h4" color="initial" align="center">
          Payments
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
            disabled={!payment.activePayment}
          >
            Delete
          </Button>
        </Grid>
        <Grid item>
          <Button variant={"contained"} onClick={handleOpen}>
            {!payment.activePayment ? "Add Payment" : "Update"}
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default PaymentsPage;
