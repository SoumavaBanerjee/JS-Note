import React from "react";
import { useHistory } from "react-router-dom";

import { Grid, Button, Typography, Box } from "@material-ui/core";

import makeStyles from "./style";

// svg
import heroimage from "../../../Assets/hero-image.svg";

export const HeroSection: React.FC = () => {
  const classes = makeStyles();
  let history = useHistory();

  return (
    <Grid container>
      <Grid className={classes.heroText} item md={6}>
        <Typography variant="h2">
          <Box>Prototype and document your code</Box>
        </Typography>
        <Typography variant="h2">
          <Box fontWeight="bold">
            <span className={classes.textHighlight}>in one place</span>
          </Box>
        </Typography>
        <Box className={classes.heroButtonWrapper} component="div">
          <Button
            onClick={() => {
              history.push("/demo");
            }}
            variant="outlined"
            color="primary"
            size="large"
          >
            <Typography component="span">View Demo</Typography>
          </Button>
        </Box>
      </Grid>
      <Grid className={classes.heroImage} item md={6}>
        <img
          style={{ maxWidth: "100%", height: "70%" }}
          src={heroimage}
          alt="code thinking"
        />
      </Grid>
    </Grid>
  );
};
