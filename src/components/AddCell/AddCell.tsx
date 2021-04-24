import React from "react";

import { AddCellInterface } from "../../interfaces";
import { useAction } from "../../hooks/useActions";

import makeStyles from "./styles";

import { Button } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

const AddCell: React.FC<AddCellInterface> = ({ previousCellId }) => {
  const { insertCellAfter } = useAction();
  const classes = makeStyles();

  return (
    <div className={classes.addCellWrapper}>
      <div className={classes.linethrough}></div>
      <div className={classes.buttonWrapper}>
        <Button
          className={classes.button}
          onClick={() => {
            insertCellAfter(previousCellId, "code");
          }}
          variant="outlined"
          color="primary"
          size="medium"
          startIcon={<AddIcon />}
        >
          Code
        </Button>
        <Button
          onClick={() => {
            insertCellAfter(previousCellId, "text");
          }}
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
