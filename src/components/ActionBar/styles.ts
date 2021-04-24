import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  actionBarWrapper: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: theme.palette.background.paper,
    marginBottom: "-0.5rem",
  },
  actionButtons: {
    marginRight: theme.spacing(2),
    opacity: 0.5,
    transition: "opacity 0.3s",
    "&:hover": {
      opacity: 1,
    },
  },
}));
