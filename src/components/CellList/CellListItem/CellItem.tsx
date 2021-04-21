import React from "react";
import { CellListItemInterface } from "../../../interfaces/index";

import Cell from "../../CodeCell/Cell";
import Editor from "../../MarkdownEditor/MarkdownEditor";
import ActionBar from "../../ActionBar/ActionBar";

import makeStyles from "./styles";

const CellItem: React.FC<CellListItemInterface> = ({ cell }) => {
  let child: JSX.Element;
  const classes = makeStyles();

  if (cell.type === "code") {
    child = <Cell cell={cell} />;
  } else {
    child = <Editor cell={cell} />;
  }

  return (
    <div className={classes.CellListItemWrapper}>
      <ActionBar id={cell.id} />
      {child}
    </div>
  );
};

export default CellItem;
