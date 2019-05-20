import React, { Component } from "react";
import PaletteFormNav from "./PaletteFormNav";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import { ChromePicker } from "react-color";
import Button from "@material-ui/core/Button";
import DraggableColorList from "./DraggableColorList";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { arrayMove } from "react-sortable-hoc";

const drawerWidth = 400;

const styles = theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: "0 8px",
    ...theme.mixins.toolbar,
    justifyContent: "flex-end"
  },
  content: {
    flexGrow: 1,
    height: "calc(100vh - 64px)",
    padding: theme.spacing.unit * 3,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: -drawerWidth
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
  }
});

class NewPaletteForm extends Component {
  static defaultProps = {
    maxColors: 20
  };

  state = {
    open: true,
    currentColor: "#008080",
    colors: this.props.pallets[0].colors,
    newColorName: ""
  };

  componentDidMount() {
    ValidatorForm.addValidationRule("isColorNameUnique", value => {
      return this.state.colors.every(
        ({ name }) => name.toLowerCase() !== value.toLowerCase()
      );
    });

    ValidatorForm.addValidationRule("isColorUnique", value => {
      return this.state.colors.every(
        ({ color }) => color.toLowerCase() !== this.state.currentColor
      );
    });
  }

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  handleChangeColor = val => {
    this.setState({ currentColor: val });
  };

  handleChange = ({ currentTarget }) => {
    this.setState({ [currentTarget.name]: currentTarget.value });
  };

  addNewColor = () => {
    const newColor = {
      color: this.state.currentColor,
      name: this.state.newColorName
    };
    const shift = `#${(238743 * Math.random()) | 0}`;
    this.setState({
      colors: [...this.state.colors, newColor],
      newColorName: "",
      currentColor: shift
    });
  };

  savePalette = newPaletteName => {
    const newPalette = {
      paletteName: newPaletteName,
      id: newPaletteName.toLowerCase().replace(/ /g, "-"),
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
    const { open, currentColor, colors, newColorName } = this.state;
    const isFull = colors.length >= maxColors;
    return (
      <div className={classes.root}>
        <PaletteFormNav
          open={open}
          classes={classes}
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

          <Typography variant="h4">Design Yor Palette</Typography>

          <div>
            <Button
              variant="contained"
              color="secondary"
              onClick={this.clearPalette}
            >
              Clear Palette
            </Button>
            <Button
              disabled={isFull}
              variant="contained"
              color="primary"
              onClick={this.randomColor}
            >
              {isFull ? "Palette Full" : "Random Color"}
            </Button>
          </div>

          <ChromePicker
            color={currentColor}
            onChangeComplete={({ hex }) => this.handleChangeColor(hex)}
          />

          {/* add new color form */}
          <ValidatorForm onSubmit={this.addNewColor}>
            <TextValidator
              label="Set name to this color"
              name="newColorName"
              value={newColorName}
              onChange={this.handleChange}
              validators={["required", "isColorNameUnique", "isColorUnique"]}
              errorMessages={[
                "This field is required",
                "Color name must be unique",
                "Color already exist"
              ]}
            />

            <Button
              disabled={isFull}
              variant="contained"
              style={{ backgroundColor: isFull ? "grey" : currentColor }}
              type="submit"
            >
              {isFull ? "Palette Full" : "Add Color"}
            </Button>
          </ValidatorForm>
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
