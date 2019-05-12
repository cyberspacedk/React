import React, { Component } from 'react';
import {Link} from "react-router-dom";

class PalleteList extends Component {
  render() {
    const {pallets} = this.props;

    return (
      <div>
        <h1>React colors</h1>
        {pallets.map(palette => (
          <>
          <h2>{palette.paletteName}</h2>
          <Link to={`/palette/${palette.id}`}>{palette.paletteName}</Link>
          </>
        ))}
      </div>
    );
  }
}

export default PalleteList;
