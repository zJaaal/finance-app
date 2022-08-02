import React, { useEffect } from "react";
import { Dayjs } from "dayjs";
import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useDispatch, useSelector } from "react-redux";
import { Divider, InputAdornment, TextField, Button } from "@mui/material";
import { useForm, Controller, SubmitHandler } from "react-hook-form";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import PaymentIcon from "@mui/icons-material/Payment";
import AddIcon from "@mui/icons-material/Add";
import UpdateIcon from "@mui/icons-material/Update";

import { IRootState } from "../../reducers/rootReducer";
import {
  paymentAdd,
  paymentUpdateActive,
} from "../../actions/payment/paymentActions";
import IPayment from "../../interfaces/IPayment";
import PaymentActions from "../../actions/payment/enum/PaymentActions";
import DebtActions from "../../actions/debt/enum/DebtActions";
import IDebt from "../../interfaces/IDebt";

const initialValues: IPayment = {
  id: Date.now(),
  amount: 0,
  date: new Date(Date.now()),
};

//This have some validations error, because you cannot add more money than the amount of the debt
//But the updated total will be fetched from the DB

const PaymentForm = ({ handleClose }: { handleClose: Function }) => {
  const { activePayment }: { activePayment: IPayment | null } = useSelector(
    (state: IRootState) => state.payment
  );

  //This wont work like this ill fetch this data from DB
  const { activeDebt }: { activeDebt: IDebt | null } = useSelector(
    (state: IRootState) => state.debt
  );
  const dispatch = useDispatch();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<IPayment>({
    defaultValues: activePayment || initialValues,
    mode: "onBlur",
    reValidateMode: "onChange",
  });

  const onSubmit: SubmitHandler<IPayment> = (data) => {
    if (activePayment) {
      dispatch<paymentUpdateActive>({
        type: PaymentActions.PAYMENT_UPDATE_ACTIVE,
        payload: data,
      });
    } else {
      dispatch<paymentAdd>({
        type: PaymentActions.PAYMENT_ADD,
        payload: data,
      });
    }
    handleClose();
  };

  return (
    <Grid
      container
      direction="column"
      alignItems={"center"}
      component="form"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Grid
        item
        container
        alignItems={"center"}
        width={"inherit"}
        rowSpacing={1}
        marginBottom={1}
      >
        <PaymentIcon color="success" sx={{ fontSize: "30px" }} />
        <Typography variant="h5" color="initial" marginLeft={1}>
          {activePayment ? "Update Payment" : "Add Payment"}
        </Typography>
      </Grid>
      <Divider sx={{ width: "100%" }} />
      <Grid container item marginTop={1}>
        <Grid
          container
          item
          sx={{
            justifyContent: {
              xs: "center",
              sm: "space-between",
            },
          }}
          marginTop={2}
        >
          <Controller
            name="date"
            control={control}
            render={({ field }) => (
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  disableFuture
                  label={"Earning date"}
                  openTo="year"
                  views={["year", "month", "day"]}
                  renderInput={(props) => (
                    <TextField
                      variant={"standard"}
                      sx={{
                        width: {
                          xs: "100%",
                          sm: "100%",
                          md: "auto",
                        },
                      }}
                      helperText={errors.date?.message}
                      error={errors.date != undefined ? true : false}
                      {...props}
                    />
                  )}
                  {...field}
                />
              </LocalizationProvider>
            )}
            rules={{ required: "Date is required" }}
          />
          <Controller
            name="amount"
            control={control}
            render={({ field }) => (
              <TextField
                variant="standard"
                label={"Amount"}
                type="number"
                sx={{
                  marginTop: {
                    xs: "16px",
                    sm: "16px",
                    md: "0px",
                  },
                  width: {
                    xs: "100%",
                    sm: "100%",
                    md: "auto",
                  },
                }}
                helperText={errors.amount?.message}
                error={errors.amount != undefined ? true : false}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">$</InputAdornment>
                  ),
                }}
                {...field}
              />
            )}
            rules={{
              required: "Amount is required",
              min: {
                value: 1,
                message: "Amount should be at least 1",
              },
              max: {
                value: activeDebt?.amount,
                message: "Amount cannot be more than total to pay",
              },
            }}
          />
        </Grid>
      </Grid>
      <Grid
        item
        marginTop={4}
        width={"inherit"}
        display={"flex"}
        justifyContent={"flex-end"}
      >
        <Button
          variant="contained"
          startIcon={!activePayment ? <AddIcon /> : <UpdateIcon />}
          type="submit"
          disabled={!!Object.entries(errors).length}
        >
          {activePayment ? "Update" : "Add"}
        </Button>
      </Grid>
    </Grid>
  );
};

export default PaymentForm;
