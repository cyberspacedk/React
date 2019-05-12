import React, { Component } from 'react';
import {Route, Switch} from "react-router-dom";
import Palette from "./Palette";
import PalleteList from './PalleteList';
import seedColors from './seedColors';
import {generatePalette} from './colorHelpers';
import './globalStyles.css';

class App extends Component {

  findPalette =(id)=>  seedColors.find(el=> el.id === id);

  render() { 
    return (
      <>
      <Switch> 
        <Route exact path="/" render={(routeProps)=> <PalleteList pallets={seedColors} {...routeProps}/>}/>
        <Route exact path="/palette/:id" render={(routeProps)=><Palette palette={generatePalette(this.findPalette(routeProps.match.params.id))}/> }/>
        <Route exact path="/palette/:palette/:color" render={()=><p style={{color: "#000"}}>Single color page</p>}/>
      </Switch>
     
        
      </>
    );
  }
}

export default App;
