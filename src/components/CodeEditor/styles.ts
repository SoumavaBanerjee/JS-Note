import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  editorFormatBtn: {
    position: "absolute",
    top: "10px",
    right: "10px",
    zIndex: 2,
  },
  editorWrapper: {
    position: "relative",
    overflow: "hidden",
    height: "100%",
    width: "100%",
  },
}));
