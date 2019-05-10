import React, { Component } from "react";
import ColorBox from "./ColorBox";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import "./Palette.css";

class Palette extends Component {
  state = {
    level: 500
  };
  changeLevel = level => {
    this.setState({ level });
  };

  render() {
    const { colors } = this.props.palette;
    const { level } = this.state;

    const colorBoxes = colors[level].map(color => (
      <ColorBox background={color.hex} name={color.name} />
    ));

    return (
      <div className="Palette">
        <div className="slider">
          <Slider
            defaultValue={level}
            min={100}
            max={900}
            step={100}
            marks={{100:100,200:200,300:300,400:400,500:500,600:600,700:700,800:800,900:900}}
            onAfterChange={this.changeLevel}
          />
        </div>

        {/* navbar */}
        <div className="Palette-colors">{colorBoxes}</div>
        {/* footer */}
      </div>
    );
  }
}

export default Palette;
