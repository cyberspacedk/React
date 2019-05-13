import React, { Component } from "react";
import { Link } from "react-router-dom";
import MiniPalette from "./MiniPalette";
import { withStyles } from "@material-ui/styles";
import styles from "./styles/paletteListStyles";

class PalleteList extends Component {
  goToPallete = id => {
    this.props.history.push(`/palette/${id}`);
  };

  render() {
    const { pallets, classes } = this.props;

    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <nav className={classes.nav}>
            <h1>React colors</h1>
            <Link to="/palette/new">Create new pallete</Link>
          </nav>

          <div className={classes.pallets}>
            {pallets.map(palette => (
              <MiniPalette {...palette} goToPallete={this.goToPallete} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(PalleteList);
