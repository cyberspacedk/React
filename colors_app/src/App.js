import React, { Component } from 'react';
import {Route, Switch} from "react-router-dom";
import Palette from "./Palette";
import seedColors from './seedColors';
import {generatePalette} from './colorHelpers';
import './globalStyles.css';

class App extends Component {
  render() { 
    return (
      <>
      <Switch>

      <Route exact path="/" render={()=>}/>
      <Route exact path="/palette/:id" component={}/>
      </Switch>
     
        <Palette palette={generatePalette(seedColors[4])}/> 
      </>
    );
  }
}

export default App;
