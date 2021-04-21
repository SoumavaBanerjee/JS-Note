import { darken, makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  actionBarWrapper: {
    display: "flex",
    justifyContent: "flex-end",
    backgroundColor: darken(theme.palette.background.default, 0.2),
  },
}));
