import React, { Component } from "react";
import PaletteFormNav from "./PaletteFormNav";
import ColorPickerForm from "./ColorPickerForm";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import Button from "@material-ui/core/Button";
import DraggableColorList from "./DraggableColorList";
import { arrayMove } from "react-sortable-hoc";
import styles from "./styles/newPaletteFormStyles";

class NewPaletteForm extends Component {
  static defaultProps = {
    maxColors: 20
  };

  state = {
    open: true,
    colors: this.props.pallets[0].colors
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  handleChange = ({ currentTarget }) => {
    this.setState({ [currentTarget.name]: currentTarget.value });
  };

  addNewColor = newColor => {
    this.setState({
      colors: [...this.state.colors, newColor]
    });
  };

  savePalette = newPaletteName => {
    const newPalette = {
      ...newPaletteName,
      id: newPaletteName.paletteName.toLowerCase().replace(/ /g, "-"),
      colors: this.state.colors
    };
    this.props.save(newPalette);
    this.props.history.push("/");
  };

  deleteColorHandler = color => {
    const colors = this.state.colors.filter(col => col.name !== color);
    this.setState({ colors });
  };

  onSortEnd = ({ oldIndex, newIndex }) => {
    this.setState(({ colors }) => ({
      colors: arrayMove(colors, oldIndex, newIndex)
    }));
  };

  clearPalette = () => this.setState({ colors: [] });

  randomColor = () => {
    const allAvailableColors = this.props.pallets
      .map(palette => palette.colors)
      .flat();
    let rand = (Math.random() * allAvailableColors.length) | 0;
    this.setState({ colors: [...this.state.colors, allAvailableColors[rand]] });
  };

  render() {
    const { classes, maxColors, pallets } = this.props;
    const { open, colors } = this.state;
    const isFull = colors.length >= maxColors;
    return (
      <div className={classes.root}>
        <PaletteFormNav
          open={open}
          pallets={pallets}
          submit={this.savePalette}
          handleDrawerOpen={this.handleDrawerOpen}
        />
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={this.handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />

          <div className={classes.container}>
            <Typography variant="h4">Design Yor Palette</Typography>

            <div className={classes.buttons}>
              <Button
                variant="contained"
                color="secondary"
                onClick={this.clearPalette}
                className={classes.button}
              >
                Clear Palette
              </Button>
              <Button
                disabled={isFull}
                variant="contained"
                color="primary"
                onClick={this.randomColor}
                className={classes.button}
              >
                {isFull ? "Palette Full" : "Random Color"}
              </Button>
            </div>

            <ColorPickerForm
              isFull={isFull}
              addNewColor={this.addNewColor}
              colors={colors}
            />
          </div>
        </Drawer>

        <main
          className={classNames(classes.content, {
            [classes.contentShift]: open
          })}
        >
          <div className={classes.drawerHeader} />

          <DraggableColorList
            colors={colors}
            deleteColor={this.deleteColorHandler}
            axis="xy"
            onSortEnd={this.onSortEnd}
          />
        </main>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(NewPaletteForm);
