import React, { Component } from "react";
import { ChromePicker } from "react-color";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

const styles = {
  picker: {
    width: "100%!important",
    marginTop: "2rem"
  },
  addColor: {
    width: "100%",
    padding: "1rem",
    marginTop: "1rem",
    fontSize: "1rem"
  },
  colorName: {
    width: "100%",
    marginTop: "10px"
  }
};

class ColorPickerForm extends Component {
  state = {
    newColorName: "",
    currentColor: "#008080"
  };

  componentDidMount() {
    ValidatorForm.addValidationRule("isColorNameUnique", value => {
      return this.props.colors.every(
        ({ name }) => name.toLowerCase() !== value.toLowerCase()
      );
    });

    ValidatorForm.addValidationRule("isColorUnique", value => {
      return this.props.colors.every(
        ({ color }) => color.toLowerCase() !== this.state.currentColor
      );
    });
  }

  handleChangeColor = val => {
    this.setState({ currentColor: val });
  };
  handleChange = ({ currentTarget }) => {
    this.setState({ [currentTarget.name]: currentTarget.value });
  };

  handleSubmit = () => {
    const newColor = {
      color: this.state.currentColor,
      name: this.state.newColorName
    };
    this.props.addNewColor(newColor);
    this.setState({
      newColorName: "",
      currentColor: `#${(238743 * Math.random()) | 0}`
    });
  };
  render() {
    const { currentColor, newColorName } = this.state;
    const { isFull, classes } = this.props;

    return (
      <>
        <ChromePicker
          color={currentColor}
          onChangeComplete={({ hex }) => this.handleChangeColor(hex)}
          className={classes.picker}
        />

        <ValidatorForm onSubmit={this.handleSubmit}>
          <TextValidator
            className={classes.colorName}
            label="Set name to this color"
            name="newColorName"
            variant="filled"
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
            className={classes.addColor}
          >
            {isFull ? "Palette Full" : "Add Color"}
          </Button>
        </ValidatorForm>
      </>
    );
  }
}

export default withStyles(styles)(ColorPickerForm);
