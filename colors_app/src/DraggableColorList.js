import React from "react";
import DraggableColorBox from "./DraggableColorBox";
import { SortableContainer } from "react-sortable-hoc";

const DraggableColorList = SortableContainer(({ colors, deleteColor }) => (
  <div style={{ height: "100%" }}>
    {colors.map((color, idx) => (
      <DraggableColorBox
        index={idx}
        key={color.name}
        color={color.color}
        name={color.name}
        deleteColor={() => deleteColor(color.name)}
      />
    ))}
  </div>
));

export default DraggableColorList;
