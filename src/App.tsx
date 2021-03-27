import React, { useState, useEffect } from "react";
import * as esbuild from "esbuild-wasm";
import { unpkgPathPlugin } from "./plugins/unpkgPathPlugin";

import "./app.css";

const App: React.FC = () => {
  const [input, setInput] = useState("");
  const [code, setCode] = useState("");

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
    });
  };

  useEffect(() => {
    // start esbuild upon start.
    startService();
  }, []);

  const transpile = async () => {
    // If esbuild is not initialised
    if (!esbuild) {
      setCode("loading...");
      return;
    }

    try {
      const bunduledCode = await esbuild.build({
        entryPoints: ["index.js"],
        bundle: true,
        write: false,
        plugins: [unpkgPathPlugin()],
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
      <button onClick={transpile}>Transpile</button>
    </div>
  );
};

export default App;
