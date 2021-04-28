import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  FooterWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "Center",
    marginLeft: theme.spacing(2),
    padding: theme.spacing(3),
  },
  textHighlight: {
    color: theme.palette.primary.light,
  },
}));
