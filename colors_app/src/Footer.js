import React from "react";
import { withStyles } from "@material-ui/styles";
import styles from './styles/footerStyles'; 
  
const Footer = ({paletteName, emoji,classes}) => (
  <footer className={classes.paletteFooter}>
    {paletteName}
    <span className={classes.emoji}>{emoji}</span>
  </footer>
);

export default withStyles(styles)(Footer);
