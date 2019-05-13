import React, { Component } from "react";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import Footer from "./Footer"; 
import { withStyles } from "@material-ui/styles";
import styles from "./styles/paletteStyles";
 
  
class Palette extends Component {
  state = {
    level: 500,
    format: "hex"
  };

  changeLevel = level => {
    this.setState({ level });
  };

  handleChange = val => {
    this.setState({ format: val });
  };

  render() {
    const { colors, paletteName, emoji, id} = this.props.palette;
    const { level, format } = this.state;
    const {classes} = this.props;

    const colorBoxes = colors[level].map(color => (
      <ColorBox
        key={color.name}
        background={color[format]}
        name={color.name}
        isShowFullPalette={true}
        moreUrl={`/palette/${id}/${color.id}`}
      />
    ));

    return (
      <div className={classes.palette}>
        <Navbar
          level={level}
          changeLevel={this.changeLevel}
          handleChange={this.handleChange}
          isShowLevel={true}
        />
        <div className={classes.paletteColors}>{colorBoxes}</div>
        <Footer paletteName={paletteName} emoji={emoji} />
      </div>
    );
  }
}

export default withStyles(styles)(Palette);
