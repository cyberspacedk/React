import React, { Component } from "react";
import MiniPalette from "./MiniPalette";
import { withStyles } from "@material-ui/styles";

const styles = {
  root: {
    backgroundColor: "blue",
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    width: "50%",
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column',
    flexWrap: 'wrap' 
  },
  nav:{
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    color: 'white'
  },
  pallets: {
    boxSizing: 'border-box',
    width: '100%',
    display: 'grid',
    gridTemplateColumns: "repeat(3, 30%)",
    gridGap: "5%",
  }
};

class PalleteList extends Component {
  render() {
    const { pallets, classes } = this.props;

    return (
      <div className={classes.root}>

        <div className={classes.container}>

          <nav className={classes.nav}>
            <h1>React colors</h1>
          </nav>

          <div className={classes.pallets}> 
            {pallets.map(palette => (
              <MiniPalette {...palette} />
            ))}
          </div>

        </div>
        
      </div>
    );
  }
}

export default withStyles(styles)(PalleteList);
