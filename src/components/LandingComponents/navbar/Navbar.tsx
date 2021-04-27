import React from "react";
import { useHistory } from "react-router-dom";
import { AppBar, Button, Toolbar, Typography } from "@material-ui/core";

import makeStyles from "./styles";

export const Navbar: React.FC = () => {
  const classes = makeStyles();
  let history = useHistory();

  return (
    <AppBar color="transparent" position="static">
      <Toolbar className={classes.navWrapper}>
        <Typography variant="h4">JS-NOTE</Typography>
        <Button
          className={classes.demoButton}
          onClick={() => {
            history.push("/demo");
          }}
          color="primary"
          variant="outlined"
        >
          <Typography variant="button">Demo</Typography>
        </Button>
      </Toolbar>
    </AppBar>
  );
};
