import React, { Component } from "react";
import { ChromePicker } from "react-color";
import Button from "@material-ui/core/Button";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

class ColorPickerForm extends Component {
  state = {
    currentColor: "teal",
    newColorName: ""
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
  };
  render() {
    const { currentColor, newColorName } = this.state;
    const { isFull } = this.props;

    return (
      <>
        <ChromePicker
          color={currentColor}
          onChangeComplete={({ hex }) => this.handleChangeColor(hex)}
        />

        <ValidatorForm onSubmit={this.handleSubmit}>
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
      </>
    );
  }
}

export default ColorPickerForm;
