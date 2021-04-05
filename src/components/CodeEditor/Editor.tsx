import MonacoEditor, { Monaco } from "@monaco-editor/react";
import * as monaco from "monaco-editor/esm/vs/editor/editor.api";
import { EditorPropsInterface } from "../../interfaces/index";
import React, {useRef} from "react";
import prettier from "prettier";
import parser from "prettier/parser-babel";

const Editor: React.FC<EditorPropsInterface> = ({ onChange, initialValue }) => {


  const monacoEditorRef = useRef<monaco.editor.IStandaloneCodeEditor>();


  /**
   * On change in model, get the value of it's content and
   * pass it as an argument to onChange to set the input state
   */
  const onEditorDidMount = (
    editor: monaco.editor.IStandaloneCodeEditor,
    monacoInstance: Monaco
  ) => {
    // console.log(editor.getValue());
    monacoEditorRef.current = editor;
    editor.onDidChangeModelContent(() => {
      onChange(editor.getValue());
    });
  };

  /**
   * Get unformatted code, format it and set it to model
   */
  const onFormatClick = () => {
    const rawCode = monacoEditorRef!.current!.getModel()!.getValue();
    const formattedCode = prettier.format(rawCode, {
      parser: "babel",
      plugins:[parser],
      semi: true,
      singleQuote: true
    })

    monacoEditorRef.current?.setValue(formattedCode);
  }


  return (
    <div>
      <button onClick={onFormatClick}>Format</button>
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
    </div>
    
  );
};

export default Editor;
