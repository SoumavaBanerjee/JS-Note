import React from "react";
import { Grid, Typography } from "@material-ui/core";
import makeStyles from "./style";
export const Footer = () => {
  const classes = makeStyles();

  return (
    <Grid className={classes.FooterWrapper} container justify="flex-end">
      <Typography variant="h4">
        <p>
          Made with 💙 by
          <a
            style={{ textDecoration: "none" }}
            href="https://www.linkedin.com/in/soumavabanerjee--/"
          >
            <span className={classes.textHighlight}> Soumava Banerjee </span>
          </a>
        </p>
      </Typography>
    </Grid>
  );
};
