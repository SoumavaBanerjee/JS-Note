import React from "react";
import { ResizableBox } from "react-resizable";
import { ResizablePropsInterface } from "../../interfaces/index";

import "./styles.css";

const ResizableCell: React.FC<ResizablePropsInterface> = ({
  children,
  direction,
}) => {
  return (
    <ResizableBox
      minConstraints={[Infinity, 24]}
      maxConstraints={[Infinity, window.innerHeight * 0.9]}
      height={400}
      width={Infinity}
      resizeHandles={["s"]}
    >
      {children}
    </ResizableBox>
  );
};

export default ResizableCell;
