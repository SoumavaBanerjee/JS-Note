import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  actionBarWrapper: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: theme.palette.background.paper,
    marginBottom: "-0.5rem",
  },
}));
