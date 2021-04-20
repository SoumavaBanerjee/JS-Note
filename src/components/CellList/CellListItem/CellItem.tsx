import React from "react";
import { CellListItemInterface } from "../../../interfaces/index";

import Cell from "../../CodeCell/Cell";
import Editor from "../../MarkdownEditor/MarkdownEditor";

const CellItem: React.FC<CellListItemInterface> = ({ cell }) => {
  let child: JSX.Element;

  if (cell.type === "code") {
    child = <Cell cell={cell} />;
  } else {
    child = <Editor cell={cell} />;
  }

  return <div>{child}</div>;
};

export default CellItem;