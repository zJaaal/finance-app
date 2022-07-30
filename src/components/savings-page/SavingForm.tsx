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
import SavingsIcon from "@mui/icons-material/Savings";
import AddIcon from "@mui/icons-material/Add";
import UpdateIcon from "@mui/icons-material/Update";

import { IRootState } from "../../reducers/rootReducer";
import { savingAdd, savingUpdate } from "../../actions/saving/saving";
import ISaving from "../../interfaces/ISaving";
import SavingActions from "../../actions/saving/enum/SavingActions";

const initialValues: ISaving = {
  amount: 0,
  date: new Date(Date.now()),
};

const SavingForm = ({ handleClose }: { handleClose: Function }) => {
  const { activeSaving }: { activeSaving: ISaving | null } = useSelector(
    (state: IRootState) => state.saving
  );
  const dispatch = useDispatch();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ISaving>({
    defaultValues: activeSaving || initialValues,
    mode: "onBlur",
    reValidateMode: "onChange",
  });

  const onSubmit: SubmitHandler<ISaving> = (data) => {
    if (activeSaving) {
      dispatch<savingUpdate>({
        type: SavingActions.savingUpdate,
        payload: data,
      });
    } else {
      dispatch<savingAdd>({
        type: SavingActions.savingAdd,
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
        <SavingsIcon color="success" sx={{ fontSize: "30px" }} />
        <Typography variant="h5" color="initial" marginLeft={1}>
          {activeSaving ? "Update Saving" : "Add Saving"}
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
          startIcon={!activeSaving ? <AddIcon /> : <UpdateIcon />}
          type="submit"
          disabled={!!Object.entries(errors).length}
        >
          {activeSaving ? "Update" : "Add"}
        </Button>
      </Grid>
    </Grid>
  );
};

export default SavingForm;
