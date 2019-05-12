import React from 'react';
import { withStyles } from '@material-ui/styles';

const styles = {
    main: {
      backgroundColor: "purple",
      border: "solid 2px teal",
      "& span": {
        color: "green"
      }
    },
    secondary: {
      backgroundColor: "pink",
    }
}


const MiniPalette = (props) => {
  const {classes} = props; 
  return (
    <div>
      <h1 className={classes.main}><span>Mini Palette</span></h1>
      <h1 className={classes.secondary}>Mini Palette</h1>
    </div>
  );
}

export default withStyles(styles)(MiniPalette);
