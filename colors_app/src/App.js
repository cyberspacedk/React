import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Palette from "./Palette";
import PalleteList from "./PalleteList";
import SingleColorPalette from "./SingleColorPalette";
import NewPaletteForm from "./NewPaletteForm";
import seedColors from "./seedColors";
import { generatePalette } from "./colorHelpers";
import "./styles/globalStyles.css";

class App extends Component {
  state = {
    pallets: JSON.parse(localStorage.getItem("palettes")) || seedColors
  };

  findPalette = id => this.state.pallets.find(el => el.id === id);
  savePalette = palette =>
    this.setState({ pallets: [...this.state.pallets, palette] }, () =>
      localStorage.setItem("palettes", JSON.stringify(this.state.pallets))
    );

  removePalette = id => {
    const newPallets = this.state.pallets.filter(pallet => pallet.id !== id);
    this.setState({ pallets: newPallets }, () =>
      localStorage.setItem("palettes", JSON.stringify(this.state.pallets))
    );
  };

  render() {
    const { pallets } = this.state;

    return (
      <>
        <Switch>
          <Route
            exact
            path="/palette/new"
            render={routeProps => (
              <NewPaletteForm
                save={this.savePalette}
                pallets={pallets}
                {...routeProps}
              />
            )}
          />
          {/* main page */}
          <Route
            exact
            path="/"
            render={routeProps => (
              <PalleteList
                pallets={pallets}
                {...routeProps}
                remove={this.removePalette}
              />
            )}
          />
          {/* multiple palette */}
          <Route
            exact
            path="/palette/:id"
            render={routeProps => (
              <Palette
                palette={generatePalette(
                  this.findPalette(routeProps.match.params.id)
                )}
              />
            )}
          />
          {/* single palette */}
          <Route
            exact
            path="/palette/:paletteId/:colorId"
            render={routeProps => (
              <SingleColorPalette
                palette={generatePalette(
                  this.findPalette(routeProps.match.params.paletteId)
                )}
                colorId={routeProps.match.params.colorId}
              />
            )}
          />
          {/* ------------------- */}
        </Switch>
      </>
    );
  }
}

export default App;
