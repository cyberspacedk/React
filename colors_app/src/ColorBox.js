import React, { Component } from "react";
import { Link } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";
import "./ColorBox.css";
import chroma from 'chroma-js';

class ColorBox extends Component {
  state = {
    copied: false
  };

  changeCopyState = () => {
    this.setState({ copied: true }, () => {
      setTimeout(() => this.setState({ copied: false }), 1500);
    });
  };

  render() {
    const { name, background , moreUrl, isShowUrl} = this.props;
    const { copied } = this.state;

    const isDarkColor = chroma(background).luminance()<= 0.08;
    const isLightColor = chroma(background).luminance()>= 0.08;

    return (
      <CopyToClipboard text={background} onCopy={this.changeCopyState}>
        <div className="Color-box" style={{ background }}>
          {/* overlay */}
          <div
            className={`copy-overlay ${copied && "show"}`}
            style={{ background }}
          />
          <div className={`copy-message ${copied && "show"}`}>
            <h1>Copied!</h1>
            <p className={isLightColor && 'dark-text'}>{background}</p>
          </div>
          {/* overlay end */}
          <div className="copy-container">
            <div className="box-content">
              <span className={isDarkColor && 'light-text'}>{name}</span>
            </div>
            <button className={`copy-button ${isLightColor && 'dark-text'}`}>Copy</button>
          </div>

         { isShowUrl && 
          (<Link to={moreUrl} onClick={(e)=> e.stopPropagation()}>
          <span className={`see-more ${isLightColor && 'dark-text'}`}>more</span>
          </Link>)}
           
        </div>
      </CopyToClipboard>
    );
  }
}

export default ColorBox;
