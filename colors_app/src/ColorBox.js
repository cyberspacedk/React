import React, { Component } from "react";
import { Link } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { withStyles } from "@material-ui/styles";
import "./ColorBox.css";
import chroma from "chroma-js";

const styles = {
  colorBox: {
    width: "20%",
    height: props => props.isShowFullPalette ? "25%" : "50%",
    margin: "0 auto",
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    marginBottom: "-4px",
    '&:hover button':{
      opacity: '1',
      transition: 'all .3s linear',
    }
  },
  copyText: {
    color: props =>
      chroma(props.background).luminance() >= 0.7 ? "#000" : "#fff"
  },
  colorName: {
    color: props =>
      chroma(props.background).luminance() <= 0.8 ? "#fff" : "#000"
  },
  seeMore: {
    color: props =>
      chroma(props.background).luminance() >= 0.7 ? "#000" : "#fff",
    background: "rgba(255,255,255, .3)",
    position: "absolute",
    border: "none",
    right: "0",
    bottom: "0",
    width: "60px",
    height: "30px",
    textAlign: "center",
    lineHeight: "30px",
    textTransform: "uppercase"
  },
  copyButtom: {
    color: props =>
      chroma(props.background).luminance() >= 0.7 ? "#000" : "#fff",
    width: "100px",
    height: "30px",
    position: "absolute",
    display: "inline-block",
    top: "50%",
    left: "50%",
    marginLeft: "-50px",
    marginTop: "-15px",
    textAlign: "center",
    outline: "none",
    border: "none",
    backgroundColor: "rgba(255,255,255,.3)",
    lineHeight: "30px",
    textTransform: "uppercase",
    transition: "all .3s linear",
    opacity: '0'
  }
};

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
    const { name, background, moreUrl, isShowFullPalette, classes } = this.props;
    const { copied } = this.state;

    return (
      <CopyToClipboard text={background} onCopy={this.changeCopyState}>
        <div className={classes.colorBox} style={{ background }}>
          {/* overlay */}
          <div
            className={`copy-overlay ${copied && "show"}`}
            style={{ background }}
          />
          <div className={`copy-message ${copied && "show"}`}>
            <h1>Copied!</h1>
            <p className={classes.copyText}>{background}</p>
          </div>
          {/* overlay end */}

          <div className="copy-container">
            <div className="box-content">
              <span className={styles.colorName}>{name}</span>
            </div>
            <button className={classes.copyButtom}>Copy</button>
          </div>

          {isShowFullPalette && (
            <Link to={moreUrl} onClick={e => e.stopPropagation()}>
              <span className={classes.seeMore}>more</span>
            </Link>
          )}
        </div>
      </CopyToClipboard>
    );
  }
}

export default withStyles(styles)(ColorBox);
