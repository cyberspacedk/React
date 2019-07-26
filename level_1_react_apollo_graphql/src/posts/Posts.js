import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { Link } from "react-router-dom";

const Posts = () => (
  <Query query={POSTS_QUERY}>
    {({ loading, data: { posts } }) => {
      if (loading) return "Loading...";
      return posts.map(post => (
        <Link to={`post/${post.id}`}>
          <h1 key={(Math.random() * 24235) | 0}>{post.title}</h1>
        </Link>
      ));
    }}
  </Query>
);

export default Posts;

// Write our query
const POSTS_QUERY = gql`
  query allposts {
    posts {
      id
      createdAt
      title
      body
    }
  }
`;
