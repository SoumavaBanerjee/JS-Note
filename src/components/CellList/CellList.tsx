import React from "react";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import CellItem from "./CellListItem/CellItem";

const CellList: React.FC = () => {
  // sort data according to order from state
  const cells = useTypedSelector(({ cell: { data, order } }) =>
    order.map((id) => data[id])
  );

  console.log(cells);

  const renderedCells = cells.map((cell) => (
    <CellItem key={cell.id} cell={cell} />
  ));

  return <div>{renderedCells}</div>;
};

export default CellList;
