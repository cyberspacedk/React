import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ColorBox from "./ColorBox";
import { withStyles } from "@material-ui/styles";
import styles from "./styles/paletteStyles";


const SingleColorPalette = ({ palette, colorId, classes }) => {
  const [format, setFormat] = useState("hex");

  const handleChange = format => {
    setFormat(format);
  };

  const getAllColorShades = (pal, colId) => {
    const allShades = pal.colors;
    const allColors = [];
    for (let key in allShades) {
      allColors.push(allShades[key].find(color => color.id === colId));
    }
    return allColors.slice(1);
  };

  const shades = getAllColorShades(palette, colorId);
  const drawBoxes = shades.map(shade => (
    <ColorBox
      key={shade.name}
      name={shade.name}
      background={shade[format]}
      isShowFullPalette={false}
    />
  ));

  const { paletteName, emoji, id } = palette;

  return (
    <div className={classes.palette}>
      <Navbar handleChange={handleChange} isShowLevel={false} />

      <div className={classes.paletteColors}>
        {drawBoxes}
        <div className={classes.goBack}>
          <Link to={`/palette/${id}`} className="back-button">
            Go back
          </Link>
        </div>
      </div>

      <Footer paletteName={paletteName} emoji={emoji} />
    </div>
  );
};

export default withStyles(styles)(SingleColorPalette);
