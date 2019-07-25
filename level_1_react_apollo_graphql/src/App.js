import React, { Component } from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Post from "../src/posts/Post";
import Posts from "../src/posts/Posts";

// connecting out site to the GraphQl API
const client = new ApolloClient({
  uri: "https://api-euwest.graphcms.com/v1/cjwkd8ou80iq601fmmd4zeymg/master"
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <div className="App">
            <p>TEST QUERY BELOW</p>
            <Switch>
              <Route path="/post/:id" component={Post} />
              <Route path="/" component={Posts} />
            </Switch>
          </div>
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
