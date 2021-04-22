import React from "react";

import { AddCellInterface } from "../../interfaces";
import { useAction } from "../../hooks/useActions";

import makeStyles from "./styles";

import { Button, Divider } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

const AddCell: React.FC<AddCellInterface> = ({ nextCellId }) => {
  const { insertCellBefore } = useAction();
  const classes = makeStyles();

  return (
    <div className={classes.addCellWrapper}>
      <div className={classes.linethrough}></div>
      <div className={classes.buttonWrapper}>
        <Button
          className={classes.button}
          variant="outlined"
          color="primary"
          size="medium"
          startIcon={<AddIcon />}
        >
          Code
        </Button>
        <Button
          className={classes.button}
          variant="outlined"
          color="primary"
          size="medium"
          startIcon={<AddIcon />}
        >
          Text
        </Button>
      </div>
    </div>
  );
};

export default AddCell;
