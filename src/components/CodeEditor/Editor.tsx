import MonacoEditor from "@monaco-editor/react";
import { EditorPropsInterface } from "../../interfaces/index";
import React from "react";

const Editor: React.FC<EditorPropsInterface> = ({ onChange, initialValue }) => {
  const onEditorDidMount = (getCurrentValue: any) => {
    console.log(getCurrentValue);
  };

  return (
    <MonacoEditor
      onMount={onEditorDidMount}
      value={initialValue}
      height="30vh"
      width="60vh"
      defaultLanguage="javascript"
      theme="vs-dark"
      options={{
        wordWrap: "on",
        minimap: {
          enabled: false,
        },
        showUnused: false,
        folding: false,
        lineNumbersMinChars: 3,
        fontSize: 16,
        automaticLayout: true,
      }}
    />
  );
};

export default Editor;
