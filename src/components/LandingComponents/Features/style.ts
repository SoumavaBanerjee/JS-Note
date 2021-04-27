import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  FeatureWrapper: {
    display: "flex",
    flexDirection: "column",
    marginTop: theme.spacing(3),
    padding: theme.spacing(2),
    height: "50vh",
  },
  featureHeadingWrapepr: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  featureCardPaper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    padding: theme.spacing(3),
    margin: theme.spacing(3),
  },
  featureCardHeader: {
    marginBottom: theme.spacing(3),
  },
  textHighlight: {
    color: theme.palette.primary.light,
  },
}));
