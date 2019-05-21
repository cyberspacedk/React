import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Button from "@material-ui/core/Button";
import PaletteMetaForm from "./PaletteMetaForm";
import styles from "./styles/paletteFormNavStyled";

class PaletteFormNav extends Component {
  state = {
    newPaletteName: "",
    showingForm: false
  };

  showFormHandler = () => this.setState({ showingForm: true });
  hideFormHandler = () => this.setState({ showingForm: false });

  render() {
    const { classes, open, submit, handleDrawerOpen, pallets } = this.props;
    const { showingForm } = this.state;
    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          color="default"
          className={classNames(classes.appBar, {
            [classes.appBarShift]: open
          })}
        >
          <Toolbar disableGutters={!open}>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={handleDrawerOpen}
              className={classNames(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>

            <Typography variant="h6" color="inherit" noWrap>
              Create a Palette
            </Typography>
          </Toolbar>

          <div className={classes.navBtns}>
            <Link to="/">
              <Button
                variant="contained"
                color="secondary"
                className={classes.button}
              >
                Go Back
              </Button>
            </Link>

            <Button
              variant="contained"
              color="primary"
              onClick={this.showFormHandler}
              className={classes.button}
            >
              Save
            </Button>
          </div>
        </AppBar>
        {showingForm && (
          <PaletteMetaForm
            submit={submit}
            pallets={pallets}
            hide={this.hideFormHandler}
          />
        )}
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(PaletteFormNav);
