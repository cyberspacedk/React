import React, { Component } from "react";
import "./ColorBox.css";

class ColorBox extends Component {
  render() {
    const {name, background} = this.props;
    return (
      <div className="Color-box" style={{background}}>
        <div className="copy-container"> 
          <div className="box-content">
            <span>{name}</span>
          </div>
          <button className="copy-button">Copy</button>
        </div>
        <span className="see-more">more</span>
      </div>
    );
  }
}

export default ColorBox;
