import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import {ApolloProvider, Query} from 'react-apollo';
import gql from 'graphql-tag'; 


import logo from './logo.svg';
import './App.css';

// connecting out site to the GraphQl API
const client = new ApolloClient({
  // uri: 'https://api-uswest.graphcms.com/v1/cjjoov78z2j9t01gclcnhwlb9/master'
  uri: 'https://api-euwest.graphcms.com/v1/cjwkd8ou80iq601fmmd4zeymg/master'

});

// Write our query
const POSTS_QUERY = gql`
query allposts{
  posts{
    id
    createdAt
    title
    body
  }
}`;

// Running query outside of React
// client.query({
//   query: testQuery
// })
// .then(data=> console.log(data))
 

// Apollo Provider attachet the client to our React app
class App extends Component {

  render() {
    return (
      <ApolloProvider client={client}>
      <div className="App"> 
        <p>TEST QUERY BELOW</p>
         <Query query={POSTS_QUERY}>
           {({loading, data:{posts}})=> {
             if(loading) return "Loading..."; 
             return posts.map(post=> (<h1 key={Math.random()*24235 | 0}>{post.title}</h1>))
           }}
         </Query>

      </div>
      </ApolloProvider>
    );
  }
}

export default App;
