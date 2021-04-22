import React from "react";

import { AddCellInterface } from "../../interfaces";
import { useAction } from "../../hooks/useActions";

const AddCell: React.FC<AddCellInterface> = ({ nextCellId, type }) => {
  const { insertCellBefore } = useAction();

  return <div></div>;
};

export default AddCell;
