import React, { Component } from "react";
import { Link } from "react-router-dom";
import Slider from "rc-slider";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Snackbar from "@material-ui/core/Snackbar";
import CloseIcon from "@material-ui/icons/Close";
import "rc-slider/assets/index.css";
import "./Navbar.css";
import { IconButton } from "@material-ui/core";

class Navbar extends Component {
  state = {
    format: "hex",
    open: false
  };

  handleFormatChange = ({ target }) => {
    this.setState({ format: target.value, open: true }, () =>
      this.props.handleChange(this.state.format)
    );
  };

  closeSnack = () => {
    this.setState({ open: false });
  };

  render() {
    const { level, changeLevel, isShowLevel } = this.props;
    const { format, open } = this.state;

    return (
      <header className="Navbar">
        <div className="logo">
          <Link to="/">reactcolorpicker</Link>
        </div>

        {isShowLevel && (
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
        )}

        <div className="select-container">
          <Select onChange={this.handleFormatChange} value={format}>
            <MenuItem value="hex">HEX - #ffffff</MenuItem>
            <MenuItem value="rgb">RGB - rgb(255,255,255)</MenuItem>
            <MenuItem value="rgba">RGBA - rgba(255,255,255,1.0)</MenuItem>
          </Select>
        </div>

        <Snackbar
          anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
          open={open}
          autoHideDuration={3000}
          message={
            <span id="message-id">
              Format change to <b>{format.toUpperCase()}</b>
            </span>
          }
          ContentProps={{
            "aria-describedby": "message-id"
          }}
          onClose={this.closeSnack}
          action={[
            <IconButton onClick={this.closeSnack} color="inherit">
              <CloseIcon />
            </IconButton>
          ]}
        />
      </header>
    );
  }
}

export default Navbar;
