import React from "react";
import ColorBox from "./ColorBox";

const SingleColorPalette = ({ palette, colorId }) => {
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
      key={shade.id}
      name={shade.name}
      background={shade.hex}
      isShowUrl={false}
    />
  ));

  return (
    <div className="Palette">
      <h1>Single Color Palette</h1> 
      <div className="palette-colors">{drawBoxes}</div> 
    </div>
  );
};

export default SingleColorPalette;
