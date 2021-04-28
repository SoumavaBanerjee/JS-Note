import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  heroButtonWrapper: {
    marginTop: theme.spacing(2),
  },
  heroText: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    marginTop: theme.spacing(3),
    padding: theme.spacing(3),
  },
  heroImage: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: theme.spacing(3),
    padding: theme.spacing(3),
  },
  textHighlight: {
    color: theme.palette.primary.light,
  },
}));