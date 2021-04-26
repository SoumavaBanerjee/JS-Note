import theme from "../../theme";
import makeStyles from "../../styles";
import { ThemeProvider } from "@material-ui/core";
import { CssBaseline } from "@material-ui/core";
import CellList from "../../components/CellList/CellList";

const DemoPage = () => {
  const classes = makeStyles();

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.wrapper}>
        <CssBaseline />
        <CellList />
      </div>
    </ThemeProvider>
  );
};

export default DemoPage;
