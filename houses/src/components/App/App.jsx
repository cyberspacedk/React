import React, { Component } from "react";
import Houseitems from '../Houseitems/Houseitems'
import Customview from "../Customview/Customview";
import style from './App.module.css'

export default class App extends Component {
  state = {
    houses: [],
    template: [],
    customData: [],
    error: false
  };

  componentDidMount() {
    this.getHouses();
    this.getTemplate();
  }

  getHouses = () => {
    fetch("https://demo4452328.mockable.io/properties")
      .then(response => response.json())
      .then(({ data }) => {
        this.setState({
          houses: [...data]
        });
      })
      .catch(() => this.setState({ error: true }));
  };

  getTemplate = () => {
    fetch("http://demo4452328.mockable.io/templates")
      .then(resp => resp.json())
      .then(data => {
        const temp = data.map(elem => ({
          id: elem.id,
          template: elem.template
        }));
        this.setState({
          template: [...temp]
        });
      });
  };

  getCustomId = ({ target }) => {
    const customView = this.state.template.find(
      elem => elem.id == target.dataset.id
    );

    this.setState({
      customData: [...customView.template]
    });
  };

  render() {
    const { houses, customData } = this.state;

    return (
      <div>
        <Customview getCustomId={this.getCustomId} />
        <ul className={style.houselist}>
         <Houseitems houses={houses} template={customData} /> 
        </ul>
      </div>
    );
  }
}
