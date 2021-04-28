import React from "react";
import { useHistory } from "react-router-dom";

import {
  ThemeProvider,
  CssBaseline,
  Grid,
  Button,
  Typography,
  Container,
  Box,
} from "@material-ui/core";

import {
  Navbar,
  HeroSection,
  Feature,
  Footer,
} from "../../components/LandingComponents";
import theme from "../../theme";
import makeStyles from "./styles";

const LandingPage: React.FC = () => {
  const classes = makeStyles();
  let history = useHistory();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <Container maxWidth="lg" className={classes.heroWrapper}>
        <HeroSection />
        <Feature />
        <Footer />
      </Container>
    </ThemeProvider>
  );
};

export default LandingPage;
