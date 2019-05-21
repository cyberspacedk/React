import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import { SortableElement } from "react-sortable-hoc";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles/draggableColorBoxStyles";

const DraggableColorBox = SortableElement(
  ({ color, classes, name, deleteColor }) => (
    <div className={classes.root} style={{ backgroundColor: color }}>
      <div className={classes.boxContent}>
        <span> {name}</span>
        <DeleteIcon
          className={classes.deleteIcon}
          name={name}
          onClick={deleteColor}
        />
      </div>
    </div>
  )
);

export default withStyles(styles)(DraggableColorBox);
