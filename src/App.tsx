import React, { useState, useEffect, useRef } from "react";
import * as esbuild from "esbuild-wasm";
import * as plugins from "./plugins/index";
import CodeEditor from "./components/CodeEditor/Editor";

import { Paper, Container, Grid, Button } from "@material-ui/core";
import makeStyles from "./styles";

const App: React.FC = () => {
  const [input, setInput] = useState("");
  const iframeRef = useRef<any>();
  const classes = makeStyles();
  const executableScript = `<html>
  <head></head>
  <body>
  <div id = "root"></div>
  <script>
  window.addEventListener('message', () => {
    try{
      eval(event.data);
    }catch(error){
      document.querySelector("#root").innerHTML = '<div style="color: red"><h1>Runtime Error:</h1> <p>' + error + '</p></div>'
    }
  }, false);
  </script>
  </body>
  
  </html>`;

  /**
   *In the old version, .startService() returned a promise that resolved to a service object.
    But in the new version, .initialize() returns a promise that resolves to undefined.
    This is an intentional design change. There is no more service object.
    Instead, you just call transform and build on esbuild's API object itself.  
   *
   */

  // set worker to true in final version.
  const startService = async () => {
    await esbuild.initialize({
      wasmURL: "/esbuild.wasm",
      worker: true,
    });
  };

  useEffect(() => {
    // start esbuild upon start.
    startService();
    console.log(esbuild);
  }, []);

  const transpile = async () => {
    // Refresh iframe before every transpile
    iframeRef.current.srcdoc = executableScript;

    try {
      /**
       * @EntryPoint entry file to start bundling,
       * @bundle bundling should occur or not
       * @write return the file as an in-memory buffer
       * @color colored warnings
       * @define Define environment variable value
       * @plugin Define all custom written plugins
       */

      const bunduledCode = await esbuild.build({
        entryPoints: ["index.js"],
        bundle: true,
        write: false,
        color: true,
        define: {
          "process.env.NODE_ENV": '"development"', // set development to a string not a variable.
          global: "window",
        },
        plugins: [
          plugins.unpkgPathPlugin(),
          plugins.unpkgFetchPackagePlugin(input),
        ],
      });

      console.log(bunduledCode);

      if (bunduledCode.warnings.length) {
        console.log(bunduledCode);
      }

      // setCode(bunduledCode.outputFiles[0].text);
      iframeRef.current.contentWindow.postMessage(
        bunduledCode.outputFiles[0].text,
        "*"
      );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container maxWidth="xl">
      <Paper className={classes.wrapper} elevation={2}>
        <CodeEditor
          initialValue="/*Happy Coding! :) */"
          onChange={(value) => setInput(value)}
        />
        <iframe
          src="/iframes.html"
          ref={iframeRef}
          sandbox="allow-scripts"
          srcDoc={executableScript}
          style={{ background: "white" }}
          title="test"
        />
      </Paper>

      <Button color="primary" onClick={transpile} variant="outlined">
        Transpile
      </Button>
    </Container>
  );
};

export default App;
