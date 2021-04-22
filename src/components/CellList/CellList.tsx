import React, { Fragment } from "react";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import CellItem from "./CellListItem/CellItem";
import AddCell from "../AddCell/AddCell";

const CellList: React.FC = () => {
  // sort data according to order from state
  const cells = useTypedSelector(({ cell: { data, order } }) =>
    order.map((id) => data[id])
  );

  console.log(cells);

  const renderedCells = cells.map((cell) => (
    <Fragment key={cell.id}>
      <AddCell nextCellId={cell.id} />
      <CellItem key={cell.id} cell={cell} />
    </Fragment>
  ));

  return (
    <div>
      {renderedCells}
      <AddCell nextCellId={null} />
    </div>
  );
};

export default CellList;
