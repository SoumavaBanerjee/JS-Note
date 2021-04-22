import { grey, red } from "@material-ui/core/colors";
import { darken, makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  addCellWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },

  button: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
  },

  linethrough: {
    position: "absolute",
    height: "1px",
    width: "50%",
    backgroundColor: grey[400],
    zIndex: -1,
  },

  buttonWrapper: {
    display: "flex",
    justifyContent: "center",
    width: "20%",
    backgroundColor: theme.palette.background.default,
  },
}));
