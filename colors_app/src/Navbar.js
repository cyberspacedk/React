import React, { Component } from "react";
import { Link } from "react-router-dom";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { withStyles } from "@material-ui/styles";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Snackbar from "@material-ui/core/Snackbar";
import CloseIcon from "@material-ui/icons/Close";
import { IconButton } from "@material-ui/core";  
import styles from './styles/navBarStyles';


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
    const { level, changeLevel, isShowLevel, classes } = this.props;
    const { format, open } = this.state;

    return (
      <header className={classes.navbar}>
        <div className={classes.logo}>
          <Link to="/">reactcolorpicker</Link>
        </div>

        {isShowLevel && (
          <div>
            <span>Level:</span>
            <div className={classes.slider}>
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

        <div className={classes.selectContainer}>
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

export default withStyles(styles)(Navbar);
