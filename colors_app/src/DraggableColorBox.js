import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import { SortableElement } from "react-sortable-hoc";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  root: {
    height: "25%",
    width: "20%",
    margin: "0 auto",
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    marginBottom: "-4px",
    "&:hover svg": {
      color: "white",
      transform: "scale(1.3)"
    }
  },
  boxContent: {
    position: "absolute",
    padding: "10px",
    width: "100%",
    left: "0",
    bottom: "0",
    color: "rgba(255,255,255,.5)",
    letterSpacing: "1px",
    textTransform: "uppercase",
    fontSize: "12px",
    display: "flex",
    justifyContent: "space-between"
  },
  deleteIcon: {
    transition: ".3s linear"
  }
};

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
