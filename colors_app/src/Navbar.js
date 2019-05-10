import React, { Component } from "react";
import Slider from "rc-slider";
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import "rc-slider/assets/index.css";
import "./Navbar.css";

class Navbar extends Component {

  state ={
    format: 'hex',
  }
  handleChange = ({target}) =>{
    this.setState({format: target.value}, ()=> this.props.handleChange(this.state.format));
    
  }

  render() {
    const { level, changeLevel} = this.props;
    const {format} = this.state;

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

        <div>
          <Select onChange={this.handleChange} value={format}>
              <MenuItem value="hex">HEX - #ffffff</MenuItem>
              <MenuItem value="rgb">RGB - rgb(255,255,255)</MenuItem>
              <MenuItem value="rgba">RGBA - rgba(255,255,255,1.0)</MenuItem>
          </Select>
        </div>
      
      </header>
    );
  }
}

export default Navbar;
