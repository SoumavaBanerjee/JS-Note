import React, { useState, useEffect, useRef } from "react";
import MDEditor from "@uiw/react-md-editor";
import { Paper } from "@material-ui/core";

import { CellListItemInterface } from "../../interfaces";
import { useAction } from "../../hooks/useActions";

import makeStyles from "./styles";

// re-style the drag handle;
import "./resizerReset.css";

const MarkdownEditor: React.FC<CellListItemInterface> = ({ cell }) => {
  const classes = makeStyles();
  const [editing, setEditing] = useState(false);
  const [textValue, setTextValue] = useState("# header");
  const { updateCell } = useAction();
  const markdownRef = useRef<HTMLDivElement | null>(null);

  // Toogle between view mode and editor mode
  useEffect(() => {
    const listner = (event: MouseEvent) => {
      // detect if clicked within editor div
      if (
        markdownRef.current &&
        event.target &&
        markdownRef.current.contains(event.target as Node)
      ) {
        console.log("element clicked within editor");
        return;
      }

      console.log("element clicked is not within editor");

      setEditing(false);
      console.log(event.target);
    };

    document.addEventListener("click", listner, { capture: true });

    return () => {
      document.removeEventListener("click", listner, { capture: true });
    };
  }, []);

  if (editing) {
    return (
      <Paper
        ref={markdownRef}
        className={`${classes.PaperContainer} text-editor`}
        elevation={2}
      >
        <MDEditor
          value={textValue}
          onChange={(updatedTextValue) => setTextValue(updatedTextValue || "")}
        />
      </Paper>
    );
  }

  return (
    <Paper
      onClick={() => setEditing(true)}
      className={`${classes.PaperContainer} text-editor`}
      elevation={2}
    >
      <MDEditor.Markdown source={textValue} />
    </Paper>
  );
};

export default MarkdownEditor;
