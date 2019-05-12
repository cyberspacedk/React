import React, { Component } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import "./ColorBox.css";

class ColorBox extends Component {
  state = {
    copied : false,
  }

  changeCopyState = ()=>{
    this.setState({copied:true} , ()=>{
      setTimeout(()=> this.setState({copied:false}), 1500)
    })
  }

  render() {
    const { name, background } = this.props;
    const {copied} = this.state;
 

    return (
      <CopyToClipboard text={background} onCopy={this.changeCopyState}>
        <div className="Color-box" style={{ background }}>
{/* overlay */}
        <div className={`copy-overlay ${copied && 'show'}`} style={{background}} />
        <div className={`copy-message ${copied && 'show'}`}>
          <h1>Copied!</h1>
          <p>{background}</p>
        </div>
{/* overlay end */}
          <div className="copy-container">
            <div className="box-content">
              <span>{name}</span>
            </div>
            <button className="copy-button">Copy</button>
          </div>

          <span className="see-more">more</span>

        </div>
      </CopyToClipboard>
    );
  }
}

export default ColorBox;
 