import React from "react";
import { ResizableBox } from "react-resizable";
import { ResizablePropsInterface } from "../../interfaces/index";

import "./styles.css";

const ResizableCell: React.FC<ResizablePropsInterface> = ({
  children,
  direction,
}) => {
  return (
    <ResizableBox height={500} width={800} resizeHandles={["s"]}>
      {children}
    </ResizableBox>
  );
};

export default ResizableCell;
