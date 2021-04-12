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
      maxConstraints={[Infinity, window.innerHeight * 0.9]} // 90% of window height
      minConstraints={[Infinity, window.innerHeight * 0.1]} // 10% of window height
      height={400}
      width={Infinity}
      resizeHandles={["s"]}
    >
      {children}
    </ResizableBox>
  );
};

export default ResizableCell;
