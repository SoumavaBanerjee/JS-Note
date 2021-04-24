import React, { useState, useEffect } from "react";
import bundle from "../../Bundler/index";
import CodeEditor from "../CodeEditor/Editor";
import PreviewWindow from "../PreviewWindow/PreviewWindow";
import ResizableCell from "../ResizableCell/ResizableCell";

import { Paper } from "@material-ui/core";
import makeStyles from "./styles";

import { CellListItemInterface } from "../../interfaces";

import { useAction } from "../../hooks/useActions";

const Cell: React.FC<CellListItemInterface> = ({ cell }) => {
  const [code, setCode] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const classes = makeStyles();

  const { updateCell } = useAction();

  // Debouncing code execution upon delay of 1.5s
  useEffect(() => {
    const timer = setTimeout(async () => {
      const bundledCode = await bundle(cell.content);
      setCode(bundledCode.code);
      setErrorMessage(bundledCode.error);
    }, 1500);

    return () => {
      clearTimeout(timer);
    };
  }, [cell.content]);

  return (
    <ResizableCell direction="verticle">
      <Paper className={classes.wrapper} elevation={2}>
        <CodeEditor
          initialValue={cell.content}
          onChange={(value) => updateCell(cell.id, value)}
        />
        <PreviewWindow errorMessage={errorMessage} code={code} />
      </Paper>
    </ResizableCell>
  );
};

export default Cell;
