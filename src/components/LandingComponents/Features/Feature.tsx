import React from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import Card from "./Card/Card";
import makeStyles from "./style";

export const Feature = () => {
  const classes = makeStyles();
  return (
    <div className={classes.FeatureWrapper}>
      <Typography variant="h3">
        <Box className={classes.featureHeadingWrapepr} fontWeight="medium">
          <span>🚀 Features</span>
        </Box>
      </Typography>
      <Grid container>
        <Grid item xs={12} lg={6}>
          <Card
            bodyText="Intuitive Cell based interface.
           live edit text cells with full markdown support
            and live execute code cells, all in the browser"
            emoji="🎯"
            headerText="Cell based Interface"
          />
        </Grid>
        <Grid item xs={12} lg={6}>
          <Card
            bodyText="Lightning fast build time. Code bundling and execution has never been
            faster before."
            emoji="✨"
            headerText="Build with Speed!"
          />
        </Grid>
        <Grid item xs={12} lg={6}>
          <Card
            bodyText="No hassle of setting up environment and stuff! just import normally and we will
            get that package from NPM for you"
            emoji="🎯"
            headerText="Use libraries from NPM directly!"
          />
        </Grid>
        <Grid item xs={12} lg={6}>
          <Card
            bodyText="Intuitive Cell based interface.
           live edit text cells with full markdown support
            and live execute code cells, all in the browser"
            emoji="🎯"
            headerText="Cell based Interface"
          />
        </Grid>
      </Grid>
    </div>
  );
};
