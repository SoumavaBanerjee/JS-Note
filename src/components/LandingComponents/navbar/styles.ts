import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  navWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  demoButton: {
    marginRight: theme.spacing(2),
  },
  navButtonWrapper: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
  },
}));
