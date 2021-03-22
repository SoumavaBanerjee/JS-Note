import React, { useState } from "react";
import "./app.css";

const App: React.FC = () => {
  const [input, setInput] = useState("");
  const [code, setCode] = useState("");

  const transpile = () => {
    console.log("transpile");
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
        <div className="screen"></div>
      </div>
      <button onClick={transpile}>Transpile</button>
    </div>
  );
};

export default App;
