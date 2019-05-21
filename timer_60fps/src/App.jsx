import React, { Component } from "react";
import styled from "styled-components";

const Counter = styled.div`
  background-color: #000;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    font-size: 7rem;
    color: #fff;
    font-family: Monospace;
  }
`;

class App extends Component {
  state = {
    start: 0,
    end: 200
  };

  fire = () => {
    this.state.start < this.state.end &&
      this.setState(prevState => ({ start: prevState.start + 1 }));
  };

  componentDidMount() {
    this.fire();
  }

  componentDidUpdate() {
    let end = this.state.end;
    let start = this.state.start;
    let delay = 0;
    let fps = 1000 / 60;

    if (start > end * 0.8) delay += 40;
    if (start > end * 0.9) delay += 50;

    setTimeout(() => {
      setTimeout(() => requestAnimationFrame(this.fire), delay);
    }, fps);
  }

  render() {
    const { start } = this.state;
    return (
      <Counter>
        <p>{start}</p>
      </Counter>
    );
  }
}

export default App;
