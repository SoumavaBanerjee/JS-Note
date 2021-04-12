import React, { useEffect } from "react";
import * as esbuild from "esbuild-wasm";
import Cell from "./components/CodeCell/Cell";

import { Container } from "@material-ui/core";
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
  const startService = async () => {
    await esbuild.initialize({
      wasmURL: "/esbuild.wasm",
      worker: true,
    });
  };
  useEffect(() => {
    startService();
  }, []);

  return (
    <Container maxWidth="xl">
      <Cell />
    </Container>
  );
};

export default App;
