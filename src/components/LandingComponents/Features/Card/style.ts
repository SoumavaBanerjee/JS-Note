import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  CardPaper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    padding: theme.spacing(3),
    margin: theme.spacing(3),
    "&:hover": {
      ".MuiPaper-elevation2": `box-shadow: 0px 3px 1px -2px #42A5F5,
         0px 2px 2px 0px #42A5F5,
         0px 1px 5px 0px #42A5F5`,
    },
  },
  CardHeader: {
    marginBottom: theme.spacing(3),
  },
  textHighlight: {
    color: theme.palette.primary.light,
  },
}));
