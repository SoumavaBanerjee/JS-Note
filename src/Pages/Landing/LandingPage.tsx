import React from "react";
import { Link } from "react-router-dom";

import {
  AppBar,
  ThemeProvider,
  CssBaseline,
  Grid,
  Button,
  Toolbar,
  IconButton,
  Typography,
} from "@material-ui/core";

import theme from "../../theme";

const LandingPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar color="transparent" position="static">
        <Toolbar>
          <Typography variant="h6">News</Typography>
          <Button color="primary" variant="outlined">
            <Link to="/demo">
              <Typography variant="button">Demo</Typography>{" "}
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};

export default LandingPage;
