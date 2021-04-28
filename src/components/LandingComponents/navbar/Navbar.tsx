import React from "react";
import { useHistory } from "react-router-dom";
import {
  AppBar,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";

import makeStyles from "./styles";

export const Navbar: React.FC = () => {
  const classes = makeStyles();
  let history = useHistory();

  return (
    <AppBar color="transparent" position="static">
      <Toolbar className={classes.navWrapper}>
        <Typography component="div" variant="h4">
          JS-NOTE
        </Typography>
        <div className={classes.navButtonWrapper}>
          <Button
            className={classes.demoButton}
            onClick={() => {
              history.push("/demo");
            }}
            color="primary"
            variant="outlined"
            size="large"
          >
            <Typography variant="button">Demo</Typography>
          </Button>
          <a
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: "none" }}
            href="https://github.com/SoumavaBanerjee/JS-transpiler"
          >
            <IconButton color="primary">
              <GitHubIcon />
            </IconButton>
          </a>
        </div>
      </Toolbar>
    </AppBar>
  );
};
