import React from "react";
import { ActionBarinterface } from "../../interfaces";
import { Button } from "@material-ui/core";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import CloseIcon from "@material-ui/icons/Close";

import { useAction } from "../../hooks/useActions";

import makeStyles from "./styles";

const ActionBar: React.FC<ActionBarinterface> = ({ id }) => {
  const classes = makeStyles();

  const { moveCell, deleteCell } = useAction();

  return (
    <div className={classes.actionBarWrapper}>
      <Button
        className={classes.actionButtons}
        onClick={() => {
          moveCell(id, "up");
        }}
        size="small"
        color="primary"
        variant="outlined"
      >
        <ArrowUpwardIcon color="primary" />
      </Button>
      <Button
        className={classes.actionButtons}
        onClick={() => {
          moveCell(id, "down");
        }}
        size="small"
        color="primary"
        variant="outlined"
      >
        <ArrowDownwardIcon color="primary" />
      </Button>
      <Button
        className={classes.actionButtons}
        onClick={() => {
          deleteCell(id);
        }}
        size="small"
        color="primary"
        variant="outlined"
      >
        <CloseIcon color="primary" />
      </Button>
    </div>
  );
};

export default ActionBar;
