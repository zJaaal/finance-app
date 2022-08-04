import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ThunkDispatch } from "redux-thunk";
import { useForm, Controller, useFormState } from "react-hook-form";
import { Grid, Paper, Typography, TextField, Button } from "@mui/material";

import { authLogin, startRegister } from "../../actions/auth/authActions";
import IUserRegister from "../../interfaces/IUserRegister";
import IAuthState from "../../reducers/auth/IAuthState";

const initialValues: IUserRegister = {
  username: "",
  password: "",
  email: "",
  confirm: "",
};

const RegisterPage = () => {
  const dispatch = useDispatch<ThunkDispatch<IAuthState, {}, authLogin>>();
  const navigate = useNavigate();

  const {
    handleSubmit,
    control,
    formState: { errors },
    getValues,
  } = useForm<IUserRegister>({
    defaultValues: initialValues,
    mode: "onChange",
    reValidateMode: "onChange",
  });

  const submitHandler = (data: IUserRegister) => {
    console.log(data);
    dispatch(startRegister(data));
  };
  return (
    <Grid
      container
      justifyContent={"center"}
      alignItems={"center"}
      height="inherit"
    >
      <Grid
        item
        xs={11}
        sm={6}
        md={6}
        xl={6}
        container
        height={"auto"}
        direction={"column"}
        alignItems={"center"}
        component="form"
        onSubmit={handleSubmit(submitHandler)}
      >
        <Paper
          elevation={4}
          sx={{ width: "100%", padding: "32px 32px 0px 32px", height: "100%" }}
        >
          <Grid container direction={"column"} height={"inherit"}>
            <Grid item xs={1}>
              <Typography
                variant="h6"
                color="initial"
                align="center"
                gutterBottom
              >
                Register
              </Typography>
            </Grid>
            <Grid item xs container direction={"column"} rowGap={1}>
              <Controller
                name="username"
                control={control}
                render={({ field }) => (
                  <TextField
                    variant={"standard"}
                    label={"Username"}
                    {...field}
                    helperText={errors.username?.message}
                    error={errors.username != undefined ? true : false}
                  />
                )}
                rules={{
                  required: "Username is required",
                  minLength: {
                    value: 4,
                    message: "Minimun length is 4 characters",
                  },
                  maxLength: {
                    value: 20,
                    message: "Maximun length is 20 characters",
                  },
                }}
              />
              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <TextField
                    type="email"
                    variant={"standard"}
                    label={"Email"}
                    {...field}
                    helperText={errors.email?.message}
                    error={errors.email != undefined ? true : false}
                  />
                )}
                rules={{
                  required: "Email is required",
                  pattern: {
                    value: new RegExp(
                      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
                    ),
                    message: "Please enter a valid email",
                  },
                }}
              />
              <Controller
                name="password"
                control={control}
                render={({ field }) => (
                  <TextField
                    type={"password"}
                    variant={"standard"}
                    label={"Password"}
                    {...field}
                    helperText={errors.password?.message}
                    error={errors.password != undefined ? true : false}
                  />
                )}
                rules={{
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Minimun length is 8 characters",
                  },
                  maxLength: {
                    value: 20,
                    message: "Maximun length is 20 characters",
                  },
                  pattern: {
                    value: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])./,
                    message:
                      "Password should contain 1 capital, 1 lowercase letter and at least one number",
                  },
                }}
              />
              <Controller
                name="confirm"
                control={control}
                render={({ field }) => (
                  <TextField
                    type={"password"}
                    variant={"standard"}
                    label={"Confirm Password"}
                    {...field}
                    helperText={errors.confirm?.message}
                    error={errors.confirm != undefined ? true : false}
                  />
                )}
                rules={{
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Minimun length is 8 characters",
                  },
                  maxLength: {
                    value: 20,
                    message: "Maximun length is 20 characters",
                  },
                  validate: (confirm) =>
                    getValues("password") == confirm || "Passwords don't match",
                }}
              />
              <Button
                variant="contained"
                type="submit"
                sx={{ marginTop: "20px", marginBottom: "20px" }}
              >
                Register
              </Button>
              <Button
                variant="text"
                size="small"
                onClick={() => navigate("/auth/login")}
              >
                Already have an account?
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default RegisterPage;
