import React from "react";
import { useTypedSelector } from "../../hooks/useTypedSelector";

import CodeEditor from "../CodeEditor/Editor";
import PreviewWindow from "../PreviewWindow/PreviewWindow";
import ResizableCell from "../ResizableCell/ResizableCell";

import { Paper } from "@material-ui/core";
import makeStyles from "./styles";

import { CellListItemInterface } from "../../interfaces";

import { useAction } from "../../hooks/useActions";

const Cell: React.FC<CellListItemInterface> = ({ cell }) => {
  const classes = makeStyles();
  const bundle = useTypedSelector((state) => state.bundle[cell.id]);

  const { updateCell } = useAction();

  return (
    <ResizableCell direction="verticle">
      <Paper className={classes.wrapper} elevation={2}>
        <CodeEditor
          initialValue={cell.content}
          onChange={(value) => updateCell(cell.id, value)}
        />
        {!bundle ? (
          <PreviewWindow errorMessage="" code="" />
        ) : (
          <PreviewWindow errorMessage={bundle.error} code={bundle.code} />
        )}
      </Paper>
    </ResizableCell>
  );
};

export default Cell;
