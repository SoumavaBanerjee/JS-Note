import React, { useState, useEffect, useRef } from "react";
import * as esbuild from "esbuild-wasm";
import * as plugins from "./plugins/index";

import "./app.css";

const App: React.FC = () => {
  const [input, setInput] = useState("");
  const [code, setCode] = useState("");
  const iframeRef = useRef<any>();
  const iframeHtmlDoc = `
  <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>

<body>
    <div id="root"></div>
    <script>
        window.addEventListener('message', (event) => {
            try {
                eval(event.data);
                console.log(event.data);
            } catch (error) {
                const root = document.querySelector("#root");
                root.innerHTML = '<div style = "color: red"><h4>Runtime Error:</h4>' + error + '</div>'
                console.error(error);
            }
        }, false);
    </script>
</body>

</html>
  `;

  /**
   *In the old version, .startService() returned a promise that resolved to a service object.
    But in the new version, .initialize() returns a promise that resolves to undefined.
    This is an intentional design change. There is no more service object.
    Instead, you just call transform and build on esbuild's API object itself.  
   *
   */

  const startService = async () => {
    await esbuild.initialize({
      wasmURL: "/esbuild.wasm",
      worker: false,
    });
  };

  useEffect(() => {
    // start esbuild upon start.
    startService();
  }, []);

  // Possible soln;

  // useEffect(() => {
  //   iframeRef.current.srcdoc = iframeHtmlDoc;
  // }, [input, iframeHtmlDoc]);

  const transpile = async () => {
    // refresh iframe at start. Doesn't work. Don't know why.
    // iframeRef.current.srcdoc = iframeHtmlDoc;

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

    // setCode(bunduledCode.outputFiles[0].text);

    iframeRef.current.contentWindow.postMessage(
      bunduledCode.outputFiles[0].text,
      "*"
    );

    console.log("bundling completed");
  };

  return (
    <div className="wrapper">
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
            ref={iframeRef}
            sandbox="allow-scripts"
            srcDoc={iframeHtmlDoc}
            style={{ background: "white" }}
            title="test"
          />
        </div>
        {/* <div className="screen" contentEditable ></div> */}
        <textarea
          className="screen"
          value={code}
          spellCheck="false"
          draggable="false"
          readOnly
        ></textarea>
      </div>
      <button
        onClick={() => {
          // console.log((iframeRef.current.srcdoc = executableScript));
          transpile();
        }}
      >
        Transpile
      </button>
    </div>
  );
};

export default App;
