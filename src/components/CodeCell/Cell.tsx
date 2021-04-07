import React, { useState, useEffect } from "react";
import * as esbuild from "esbuild-wasm";
import bundle from "../../Bundler/index";
import CodeEditor from "../CodeEditor/Editor";
import PreviewWindow from "../PreviewWindow/PreviewWindow";

import { Paper, Container, Grid, Button } from "@material-ui/core";
import makeStyles from "./styles";

const Cell: React.FC = () => {
  const [input, setInput] = useState("");
  const [code, setCode] = useState("");
  const classes = makeStyles();

  /**
   *In the old version, .startService() returned a promise that resolved to a service object.
    But in the new version, .initialize() returns a promise that resolves to undefined.
    This is an intentional design change. There is no more service object.
    Instead, you just call transform and build on esbuild's API object itself.  
   *
   */

  // Start es-build service once
  const startService = async () => {
    await esbuild.initialize({
      wasmURL: "/esbuild.wasm",
      worker: true,
    });
  };
  useEffect(() => {
    startService();
  }, []);

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
