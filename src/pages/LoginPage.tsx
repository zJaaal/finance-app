import { Grid, Paper, Typography } from "@mui/material";
import React from "react";

const LoginPage = () => {
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
        height={"70%"}
        direction={"column"}
        alignItems={"center"}
      >
        <Paper
          elevation={4}
          sx={{ width: "100%", padding: "10px", height: "100%" }}
        >
          <Grid container direction={"column"} height={"inherit"}>
            <Grid item>
              <Typography variant="h6" color="initial" align="center">
                Finance App WIP
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default LoginPage;
