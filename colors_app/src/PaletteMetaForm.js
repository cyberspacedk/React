import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import "emoji-mart/css/emoji-mart.css";
import { Picker } from "emoji-mart";

class PaletteMetaForm extends Component {
  state = {
    open: "form",
    newPaletteName: ""
  };

  componentDidMount() {
    ValidatorForm.addValidationRule("isPaletteNameUnique", value => {
      return this.props.pallets.every(
        ({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
      );
    });
  }

  handleChange = ({ currentTarget }) => {
    this.setState({ [currentTarget.name]: currentTarget.value });
  };

  showEmoji = () => this.setState({ open: "emoji" });

  savePalette = emoji => {
    const newPalette = {
      paletteName: this.state.newPaletteName,
      emoji: emoji.native
    };
    this.props.submit(newPalette);
  };

  render() {
    const { newPaletteName, open } = this.state;
    const { hide } = this.props;
    return (
      <div>
        <Dialog open={open === "emoji"} onClose={hide}>
          <DialogTitle>Pick a Palette Emoji</DialogTitle>
          <Picker onSelect={this.savePalette} title="choose emoji" />
        </Dialog>
        <Dialog
          open={open === "form"}
          onClose={hide}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">
            Choose a palette Name
          </DialogTitle>

          <ValidatorForm onSubmit={this.showEmoji}>
            <DialogContent>
              <DialogContentText>
                Please enter a name for your new palette ! Make sure its unique.
              </DialogContentText>
              <TextValidator
                name="newPaletteName"
                label="Palette Name"
                fullWidth
                margin="normal"
                value={newPaletteName}
                onChange={this.handleChange}
                validators={["required", "isPaletteNameUnique"]}
                errorMessages={[
                  "This field is required",
                  "Such palette already exist"
                ]}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={hide} color="primary">
                Cancel
              </Button>
              <Button variant="contained" color="primary" type="submit">
                Save Palette
              </Button>
            </DialogActions>
          </ValidatorForm>
        </Dialog>
      </div>
    );
  }
}

export default PaletteMetaForm;
