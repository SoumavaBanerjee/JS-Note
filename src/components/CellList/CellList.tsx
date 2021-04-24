import React, { Fragment } from "react";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import CellItem from "./CellListItem/CellItem";
import AddCell from "../AddCell/AddCell";

import makeStyles from "./styles";

const CellList: React.FC = () => {
  const classes = makeStyles();

  // sort data according to order from state
  const cells = useTypedSelector(({ cell: { data, order } }) =>
    order.map((id) => data[id])
  );

  const renderedCells = cells.map((cell) => (
    <Fragment key={cell.id}>
      <CellItem key={cell.id} cell={cell} />
      <AddCell previousCellId={cell.id} />
    </Fragment>
  ));

  return (
    <div>
      {/* when no cells present, set opacity to 1 */}
      <div className={`${cells.length === 0 ? classes.maxOpacity : ""}`}>
        <AddCell previousCellId={null} />
      </div>
      {renderedCells}
    </div>
  );
};

export default CellList;
