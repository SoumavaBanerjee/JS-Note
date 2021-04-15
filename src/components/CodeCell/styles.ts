import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    flexDirection: "row",
    height: "100%",
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    padding: theme.spacing(2),
  },
  [theme.breakpoints.down("sm")]: {
    wrapper: {
      flexDirection: "column",
    },
  },
  gridContainer: {
    height: "100%",
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    padding: theme.spacing(2),
  },
}));
