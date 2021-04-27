import { Box, Paper, Typography } from "@material-ui/core";
import makeStyles from "./style";

interface CardProp {
  bodyText: string;
  emoji: string;
  headerText: string;
}

const Card: React.FC<CardProp> = ({ bodyText, emoji, headerText }) => {
  const classes = makeStyles();
  return (
    <Paper className={classes.CardPaper} elevation={2}>
      <Box className={classes.CardHeader} fontWeight="bold">
        <Typography variant="h4">
          {emoji}
          <span className={classes.textHighlight}>{headerText}</span>
        </Typography>
      </Box>
      <Typography variant="subtitle1">{bodyText}</Typography>
    </Paper>
  );
};

export default Card;
