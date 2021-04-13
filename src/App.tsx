import React, { useEffect } from "react";
import * as esbuild from "esbuild-wasm";
import Cell from "./components/CodeCell/Cell";
import MarkdownEditor from "./components/MarkdownEditor/MarkdownEditor";

import makeStyles from "./styles";

const App: React.FC = () => {
  const classes = makeStyles();

  /**
   *In the old version, .startService() returned a promise that resolved to a service object.
    But in the new version, .initialize() returns a promise that resolves to undefined.
    This is an intentional design change. There is no more service object.
    Instead, you just call transform and build on esbuild's API object itself.  
   *
   */

  // Start es-build service once

  /* I'm stopping this to isolate it during markdown. Turn it back on again */
  // const startService = async () => {
  //   await esbuild.initialize({
  //     wasmURL: "/esbuild.wasm",
  //     worker: true,
  //   });
  // };
  // useEffect(() => {
  //   startService();
  // }, []);

  return <MarkdownEditor />;
};

export default App;
