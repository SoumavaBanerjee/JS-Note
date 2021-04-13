import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  PaperContainer: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    padding: theme.spacing(2),
    // Solved Line height problem of code editor
    lineHeight: 1,
  },
}));
