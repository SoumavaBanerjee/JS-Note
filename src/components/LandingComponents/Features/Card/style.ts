import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  CardPaper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    padding: theme.spacing(3),
    margin: theme.spacing(3),
  },
  CardHeader: {
    marginBottom: theme.spacing(3),
  },
  textHighlight: {
    color: theme.palette.primary.light,
  },
}));
