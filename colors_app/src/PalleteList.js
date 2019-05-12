import React, { Component } from 'react';
import {Link} from "react-router-dom";
import MiniPalette from './MiniPalette';

class PalleteList extends Component {
  render() {
    const {pallets} = this.props;

    return (
      <div>
        <h1>React colors</h1>
        <MiniPalette />
        {pallets.map(palette => (
          <> 
          <Link to={`/palette/${palette.id}`}>{palette.paletteName}</Link>
          </>
        ))}
      </div>
    );
  }
}

export default PalleteList;
