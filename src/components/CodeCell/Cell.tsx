import React, { useState } from "react";
import bundle from "../../Bundler/index";
import CodeEditor from "../CodeEditor/Editor";
import PreviewWindow from "../PreviewWindow/PreviewWindow";
import ResizableCell from "../ResizableCell/ResizableCell";

import { Paper } from "@material-ui/core";
import makeStyles from "./styles";

const Cell: React.FC = () => {
  const [input, setInput] = useState("");
  const [code, setCode] = useState("");
  const classes = makeStyles();

  const transpile = async () => {
    const bundledCode = await bundle(input);

    if (!bundledCode) return;
    setCode(bundledCode);
  };

  return (
    <ResizableCell direction="verticle">
      <Paper className={classes.wrapper} elevation={2}>
        <ResizableCell direction="horizontal">
          <CodeEditor
            initialValue="/*Happy Coding! :) */"
            onChange={(value) => setInput(value)}
          />
        </ResizableCell>
        <PreviewWindow code={code} />
      </Paper>
    </ResizableCell>
  );
};

export default Cell;
