import React, {useState}from "react";
import Navbar from './Navbar';
import Footer from './Footer';
import ColorBox from "./ColorBox";

const SingleColorPalette = ({ palette, colorId }) => {

  const [format, setFormat] = useState('hex');

  const handleChange = (format)=>{
    setFormat(format);
  } 

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
      background={shade[format]}
      isShowUrl={false}
    />
  ));
  
  const {paletteName, emoji} = palette;
   
  return (
    <div className="Palette">
      <Navbar handleChange={handleChange} isShowLevel={false}/>
      <div className="palette-colors">{drawBoxes}</div> 
      <Footer paletteName={paletteName} emoji={emoji}/>
    </div>
  );
};

export default SingleColorPalette;
