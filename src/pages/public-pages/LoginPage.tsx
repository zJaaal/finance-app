import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ThunkDispatch } from "redux-thunk";
import { authLogin, startLogin } from "../../actions/auth/authActions";
import { useForm, Controller } from "react-hook-form";
import {
  Button,
  Divider,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";

import IAuthState from "../../reducers/auth/IAuthState";
import IUserLogin from "../../interfaces/IUserLogin";

const initialValues: IUserLogin = {
  username: "",
  password: "",
};

const LoginPage = () => {
  const dispatch = useDispatch<ThunkDispatch<IAuthState, {}, authLogin>>();
  const navigate = useNavigate();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<IUserLogin>({
    defaultValues: initialValues,
    mode: "onBlur",
    reValidateMode: "onChange",
  });

  const submitHandler = (data: IUserLogin) => {
    dispatch(startLogin(data));
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
                Finance App WIP
              </Typography>
            </Grid>
            <Grid
              item
              xs
              container
              direction={"column"}
              justifyContent={"start"}
            >
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
                }}
              />
              <Button
                variant="contained"
                type="submit"
                sx={{ marginTop: "20px", marginBottom: "20px" }}
              >
                Login
              </Button>
              <Grid item container alignItems={"center"}>
                <Divider sx={{ width: "100%" }} role="presentation">
                  <Typography variant="body1" color="initial">
                    or
                  </Typography>
                </Divider>
              </Grid>
              <Button
                variant="outlined"
                startIcon={<GoogleIcon />}
                sx={{ marginTop: "20px", marginBottom: "20px" }}
              >
                Google
              </Button>
              <Button variant="text" onClick={() => navigate("/auth/register")}>
                Register
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default LoginPage;
