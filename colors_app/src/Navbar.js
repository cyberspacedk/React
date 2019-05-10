import React, { Component } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import "./Navbar.css";

class Navbar extends Component {
  render() {
    const { level, changeLevel } = this.props;
    return (
      <header className="Navbar">

        <div className="logo">
          <a href="#">reactcolorpicker</a>
        </div>

        <div className="slider-container">
          <span>Level:</span>
          <div className="slider">
            <Slider
              defaultValue={level}
              min={100}
              max={900}
              step={100}
              marks={{
                100: 100,
                200: 200,
                300: 300,
                400: 400,
                500: 500,
                600: 600,
                700: 700,
                800: 800,
                900: 900
              }}
              onAfterChange={changeLevel}
            />
          </div> 
        </div>
      
      </header>
    );
  }
}

export default Navbar;
