import React, { useState } from "react";
import bundle from "../../Bundler/index";
import CodeEditor from "../CodeEditor/Editor";
import PreviewWindow from "../PreviewWindow/PreviewWindow";

import { Paper, Container, Grid, Button } from "@material-ui/core";
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
    <Container maxWidth="xl">
      <Paper className={classes.wrapper} elevation={2}>
        <CodeEditor
          initialValue="/*Happy Coding! :) */"
          onChange={(value) => setInput(value)}
        />
        <PreviewWindow code={code} />
      </Paper>
      <Button color="primary" onClick={transpile} variant="outlined">
        Transpile
      </Button>
    </Container>
  );
};

export default Cell;
