import React from "react";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  root: {
    height: "25%",
    width: "20%",
    margin: "0 auto",
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    marginBottom: "-4px"
  }
};

const DraggableColorBox = ({ color, classes, name }) => (
  <div className={classes.root} style={{ backgroundColor: color }}>
    {name}
  </div>
);

export default withStyles(styles)(DraggableColorBox);
