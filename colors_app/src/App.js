import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Palette from "./Palette";
import PalleteList from "./PalleteList";
import SingleColorPalette from "./SingleColorPalette";
import NewPaletteForm from "./NewPaletteForm";
import seedColors from "./seedColors";
import { generatePalette } from "./colorHelpers";
import "./globalStyles.css";

class App extends Component {
  state = {
    pallets: seedColors
  };

  findPalette = id => this.state.pallets.find(el => el.id === id);
  savePalette = palette =>
    this.setState({ pallets: [...this.state.pallets, palette] });

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
              <PalleteList pallets={pallets} {...routeProps} />
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
