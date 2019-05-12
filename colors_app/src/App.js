import React, { Component } from 'react';
import {Route, Switch} from "react-router-dom";
import Palette from "./Palette";
import seedColors from './seedColors';
import {generatePalette} from './colorHelpers';
import './globalStyles.css';

class App extends Component {

  findPalette =(id)=>  seedColors.find(el=> el.id === id);

  render() { 
    return (
      <>
      <Switch>

      {/* <Route exact path="/" render={}/> */}
      <Route exact path="/palette/:id" render={(routeProps)=><Palette palette={generatePalette(this.findPalette( routeProps.match.params.id))}/> }/>
      </Switch>
     
        
      </>
    );
  }
}

export default App;
