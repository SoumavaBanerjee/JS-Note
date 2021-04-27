import React from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import Card from "./Card/Card";
import makeStyles from "./style";
import "./hoverEffect.css";

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
        <Grid className="hoverEffect" item xs={12} lg={6}>
          <Card
            bodyText="Intuitive Cell based interface.
           live edit text cells with full markdown support
            and live execute code cells, all in the browser"
            emoji="🎯"
            headerText="Cell based Interface"
          />
        </Grid>
        <Grid className="hoverEffect" item xs={12} lg={6}>
          <Card
            bodyText="Lightning fast build time. Code bundling and execution has never been
            faster before. There's a formatting button as well! "
            emoji="✨"
            headerText="Build with Speed!"
          />
        </Grid>
        <Grid className="hoverEffect" item xs={12} lg={6}>
          <Card
            bodyText="No hassle of setting up environment and stuff! just import normally and we will
            get that package from NPM for you"
            emoji="🔥"
            headerText="Use NPM libraries directly!"
          />
        </Grid>
        <Grid className="hoverEffect" item xs={12} lg={6}>
          <Card
            bodyText="Use all latest features of ESNext along with JSX! You can run react directly
            without any webpack or babel setup!
            "
            emoji="🎯"
            headerText="Out-of-the-box Jsx support"
          />
        </Grid>
      </Grid>
    </div>
  );
};
