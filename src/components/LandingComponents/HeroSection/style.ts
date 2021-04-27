import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  heroButtonWrapper: {
    marginTop: theme.spacing(2),
  },
  heroText: {
    height: "60vh",
    marginTop: theme.spacing(3),
    padding: theme.spacing(3),
  },
  heroImage: {
    height: "60vh",
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
