import React, { useState, useEffect } from "react";
import bundle from "../../Bundler/index";
import CodeEditor from "../CodeEditor/Editor";
import PreviewWindow from "../PreviewWindow/PreviewWindow";
import ResizableCell from "../ResizableCell/ResizableCell";

import { Paper } from "@material-ui/core";
import makeStyles from "./styles";

const Cell: React.FC = () => {
  const [input, setInput] = useState("");
  const [code, setCode] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const classes = makeStyles();

  // Debouncing code execution upon delay of 1s
  useEffect(() => {
    const timer = setTimeout(async () => {
      const bundledCode = await bundle(input);
      setCode(bundledCode.code);
      setErrorMessage(bundledCode.error);
    }, 1500);

    return () => {
      clearTimeout(timer);
    };
  }, [input]);

  return (
    <ResizableCell direction="verticle">
      <Paper className={classes.wrapper} elevation={2}>
        <CodeEditor
          initialValue="/*Happy Coding! :) */"
          onChange={(value) => setInput(value)}
        />
        <PreviewWindow errorMessage={errorMessage} code={code} />
      </Paper>
    </ResizableCell>
  );
};

export default Cell;
