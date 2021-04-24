import MonacoEditor, { Monaco } from "@monaco-editor/react";
import * as monaco from "monaco-editor/esm/vs/editor/editor.api";
import { EditorPropsInterface } from "../../interfaces/index";
import React, { useRef } from "react";
import prettier from "prettier";
import parser from "prettier/parser-babel";

import { Button } from "@material-ui/core";
import makeStyles from "./styles";

const Editor: React.FC<EditorPropsInterface> = ({ onChange, initialValue }) => {
  const monacoEditorRef = useRef<monaco.editor.IStandaloneCodeEditor>();
  const classes = makeStyles();

  /**
   * On change in model, get the value of it's content and
   * pass it as an argument to onChange to set the input state
   */
  const onEditorDidMount = (
    editor: monaco.editor.IStandaloneCodeEditor,
    monacoInstance: Monaco
  ) => {
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
    const formattedCode = prettier
      .format(rawCode, {
        parser: "babel",
        plugins: [parser],
        semi: true,
        singleQuote: true,
      })
      .replace(/\n$/, "");

    monacoEditorRef.current?.setValue(formattedCode);
  };

  // breaking changes. Revert to Grid conatiner if necessary
  return (
    <div className={classes.editorWrapper}>
      <Button
        className={classes.editorFormatBtn}
        color="primary"
        variant="outlined"
        size="small"
        onClick={onFormatClick}
      >
        Format
      </Button>
      <MonacoEditor
        onMount={onEditorDidMount}
        value={initialValue}
        height="100%"
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
