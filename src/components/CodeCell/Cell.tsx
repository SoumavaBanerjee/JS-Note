import React, { useState } from "react";
import bundle from "../../Bundler/index";
import CodeEditor from "../CodeEditor/Editor";
import PreviewWindow from "../PreviewWindow/PreviewWindow";
import ResizableCell from "../ResizableCell/ResizableCell";

import { Paper, Grid, Button } from "@material-ui/core";
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
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper className={classes.wrapper} elevation={2}>
            <CodeEditor
              initialValue="/*Happy Coding! :) */"
              onChange={(value) => setInput(value)}
            />
            <PreviewWindow code={code} />
          </Paper>
        </Grid>
        <Button color="primary" onClick={transpile} variant="outlined">
          Transpile
        </Button>
      </Grid>
    </ResizableCell>
  );
};

export default Cell;
