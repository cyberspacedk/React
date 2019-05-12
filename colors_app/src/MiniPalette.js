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
  colors: {
    backgroundColor: "#dae1e4", 
    height: '150px',
    width: '100%',
    borderRadius: '5px',
    overflow: 'hidden'
  },
  title: {
    display: "flex",
    justifyContent: "space-between",
    margin: "0",
    color: "black",
    paddingTop: ".5rem",
    fontSize: "1rem",
    position: "relative"
  },
  emoji: {
    marginLeft: ".5rem",
    fontsize: "1.5rem"
  },
  minicolor: {
    width: "20%",
    height: "25%",
    display: 'inline-block',
    margin: '0 auto',
    position: 'relative',
    marginBottom: '-4px',
  }
};

const MiniPalette = props => {
  console.log(props);
  const { classes, paletteName, emoji, colors } = props;
  const miniColorBoxes = colors.map(color => (
    <div
      className={classes.minicolor}
      style={{ background: color.color }}
      key={color.name}
    />
  ));
  return (
    <div className={classes.root}>
      <div className={classes.colors}>{miniColorBoxes}</div>
      <h5 className={classes.title}>
        {paletteName} <span className={classes.emoji}>{emoji}</span>
      </h5>
    </div>
  );
};

export default withStyles(styles)(MiniPalette);
