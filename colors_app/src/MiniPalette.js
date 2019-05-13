import React from "react";
import { withStyles } from "@material-ui/styles";
import styles from "./styles/miniPaletteStyles";


const MiniPalette = props => { 
 
  const { classes, paletteName, emoji, colors , goToPallete,id} = props;

  const miniColorBoxes = colors.map(color => (
    <div
      className={classes.minicolor}
      style={{ background: color.color }}
      key={color.name}
    />
  ));
  
  return (
    <div className={classes.root} onClick={()=>goToPallete(id)}>
      <div className={classes.colors}>{miniColorBoxes}</div>
      <h5 className={classes.title}>
        {paletteName} <span className={classes.emoji}>{emoji}</span>
      </h5>
    </div>
  );
};

export default withStyles(styles)(MiniPalette);
