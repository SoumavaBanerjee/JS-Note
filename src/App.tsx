import React, { useState, useEffect, useRef } from "react";
import * as esbuild from "esbuild-wasm";
import * as plugins from "./plugins/index";
import CodeEditor from "./components/CodeEditor/Editor";

// import "./app.css";

const App: React.FC = () => {
  const [input, setInput] = useState("");
  const [code, setCode] = useState("");
  const iframeRef = useRef<any>();
  const executableScript = `<html>
  <head></head>
  <body>
  <div id = "root"></div>
  <script>
  window.addEventListener('message', () => {
    eval(event.data);
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
    // If esbuild is not initialised

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
      setCode(error.message);
    }
  };

  return (
    <div className="wrapper">
      <CodeEditor
        initialValue="/*Happy Coding! :) */"
        onChange={(value) => setInput(value)}
      />
      <h1>JS_TRANSPILER</h1>
      <div className="codespace">
        <div className="editor">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            name="editor"
            spellCheck="false"
          ></textarea>
          <iframe
            src="/iframes.html"
            ref={iframeRef}
            sandbox="allow-scripts"
            srcDoc={executableScript}
            style={{ background: "white" }}
            title="test"
          ></iframe>
        </div>
        {/* <div className="screen" contentEditable ></div> */}
        <textarea
          className="screen"
          value={code}
          spellCheck="false"
          draggable="false"
          readOnly
        ></textarea>
        {/* <CodeEditor /> */}
      </div>
      <button onClick={transpile}>Transpile</button>
    </div>
  );
};

export default App;
