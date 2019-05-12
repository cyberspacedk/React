import React from "react";
import { withStyles } from "@material-ui/styles";

const styles = {
  root: {
    backgroundColor: "white",
    borderRadius: "5px",
    padding: ".5rem",
    position: "relative",
    overflow: "hidden",
    border: "2px solid black",
    "& :hover": {
      cursor: "pointer"
    }
  },
  color: {
    backgroundColor: "gray",

  },
  title: {
    display: "flex",
    justifyContent: "space-between",
    margin: "0",
    color: "black",
    paddingTop: ".5rem",
    fontSize: "1rem",
    position: "relative",
  },
  emoji: {
    marginLeft: ".5rem",
    fontsize: "1.5rem"
  }
};

const MiniPalette = props => {
  console.log(props);
  const { classes, paletteName, emoji } = props;
  return (
    <div className={classes.root}>
      <div className={classes.colors} />
      <h5 className={classes.title}>
        {paletteName} <span className={classes.emoji}>{emoji}</span>
      </h5>
    </div>
  );
};

export default withStyles(styles)(MiniPalette);
