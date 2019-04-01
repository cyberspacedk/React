import React, { Component } from "react";
import { database, auth, googleAuthProvider } from "../firebase";

export default class Fire extends Component {
  state = {
    data: null,
    newData: ""
  };

  async componentDidMount() {
    await database.ref("news").on("value", snap => {
      this.setState({ data: snap.val() });
    });
  }

  handleSubmit= (e)=> {
    e.preventDefault();
    database.ref().child('newChildData').push(this.state.newData)
  }

  handleChange = (e)=> {
    this.setState({
      newData: e.target.value
    });
  }

  render() { 
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.newData}
            name="text"
            onChange={this.handleChange}
          />
          <button onClick={()=>auth.signInWithPopup(googleAuthProvider)}>sign in</button>
        </form>
      </div>
    );
  }
}
