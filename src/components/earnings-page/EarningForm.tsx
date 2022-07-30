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
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import AddIcon from "@mui/icons-material/Add";
import UpdateIcon from "@mui/icons-material/Update";
import IPayment from "../../interfaces/IPayment";

import { IRootState } from "../../reducers/rootReducer";
import { earningAdd, earningUpdate } from "../../actions/earning/earning";
import EarningActions from "../../actions/earning/enum/EarningActions";

const initialValues: IPayment = {
  title: "",
  description: "",
  date: new Date(Date.now()),
  amount: 0,
};

const EarningForm = ({ handleClose }: { handleClose: Function }) => {
  const { activeEarning }: { activeEarning: IPayment | null } = useSelector(
    (state: IRootState) => state.earning
  );
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<IPayment>({
    defaultValues: activeEarning || initialValues,
    mode: "onBlur",
    reValidateMode: "onChange",
  });

  const dispatch = useDispatch();

  const onSubmit: SubmitHandler<IPayment> = (data) => {
    if (activeEarning) {
      dispatch<earningUpdate>({
        type: EarningActions.earningUpdate,
        payload: data,
      });
    } else {
      dispatch<earningAdd>({
        type: EarningActions.earningAdd,
        payload: { ...data, id: Date.now() },
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
        <AccountBalanceWalletIcon color="primary" sx={{ fontSize: "30px" }} />
        <Typography variant="h5" color="initial" marginLeft={1}>
          {!activeEarning ? "Add Earning" : "Update Earning"}
        </Typography>
      </Grid>
      <Divider sx={{ width: "100%" }} />
      <Grid container item marginTop={1}>
        <Controller
          name="title"
          control={control}
          render={({ field }) => (
            <TextField
              variant={"standard"}
              label={"Title"}
              {...field}
              fullWidth
              helperText={errors.title?.message}
              error={errors.title != undefined ? true : false}
            />
          )}
          rules={{
            required: "Title is required",
            minLength: {
              value: 4,
              message: "Minimun length is 4 characters",
            },
            maxLength: {
              value: 255,
              message: "Maximun length is 255 characters",
            },
          }}
        />
        <Controller
          name="description"
          control={control}
          render={({ field }) => (
            <TextField
              variant={"standard"}
              label={"Description"}
              {...field}
              multiline
              minRows={4}
              maxRows={6}
              fullWidth
              helperText={errors.description?.message}
              error={errors.description != undefined ? true : false}
            />
          )}
          rules={{
            required: false,
            minLength: {
              value: 4,
              message: "Minimun length is 4 characters",
            },
            maxLength: {
              value: 500,
              message: "Maximun length is 500 characters",
            },
          }}
        />
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
          startIcon={!activeEarning ? <AddIcon /> : <UpdateIcon />}
          type="submit"
          disabled={!!Object.entries(errors).length}
        >
          {!activeEarning ? "Add" : "Update"}
        </Button>
      </Grid>
    </Grid>
  );
};

export default EarningForm;
