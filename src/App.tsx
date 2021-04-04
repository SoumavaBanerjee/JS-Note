import React, { useState, useEffect } from "react";
import * as esbuild from "esbuild-wasm";
import * as plugins from "./plugins/index";
import Editor from "./components/Editor/Editor";

// import "./app.css";

const App: React.FC = () => {
  const [input, setInput] = useState("");
<<<<<<< HEAD
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
=======
  const [code, setCode] = useState("");
  const executableScript = `<script>
  ${code}
  </script>`;
>>>>>>> parent of 0f541cf... in-browser direct code execution works!

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
<<<<<<< HEAD
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
=======
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
        setCode(bunduledCode.warnings[0].text);
      }

      setCode(bunduledCode.outputFiles[0].text);
    } catch (error) {
      setCode(error.message);
    }
>>>>>>> parent of 0f541cf... in-browser direct code execution works!
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
<<<<<<< HEAD
=======
          <iframe
            src="/iframes.html"
            sandbox="allow-scripts"
            srcDoc={executableScript}
            style={{ color: "white" }}
            title="test"
          ></iframe>
>>>>>>> parent of 0f541cf... in-browser direct code execution works!
        </div>
        <iframe
          ref={iframeRef}
          sandbox="allow-scripts"
          srcDoc={iframeHtmlDoc}
          style={{ background: "white" }}
          title="test"
        />
      </div>
      <button
        onClick={() => {
          // console.log((iframeRef.current.srcdoc = executableScript));
          transpile();
        }}
      >
        Transpile
      </button>
      <Editor />
    </div>
  );
};

export default App;
