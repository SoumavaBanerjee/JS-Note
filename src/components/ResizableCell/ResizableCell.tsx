import React from "react";
import { ResizableBox, ResizableBoxProps } from "react-resizable";
import { ResizablePropsInterface } from "../../interfaces/index";

import "./styles.css";

const ResizableCell: React.FC<ResizablePropsInterface> = ({
  children,
  direction,
}) => {
  return (
    <ResizableBox height={400} width={Infinity} resizeHandles={["s"]}>
      {children}
    </ResizableBox>
  );
};

export default ResizableCell;
