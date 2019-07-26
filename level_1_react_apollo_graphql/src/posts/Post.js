import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";

const Post = ({ match }) => {
  const {
    params: { id }
  } = match;
  return (
    <Query
      query={POST_QUERY}
      variables={{
        id
      }}
    >
      {({ data, loading }) => {
        if (loading) return "Loading ...";
        const { post } = data;
        return <h1>{post.title}</h1>;
      }}
    </Query>
  );
};

// Write our query
const POST_QUERY = gql`
  query post($id: ID!) {
    post(where: { id: $id }) {
      id
      title
      body
    }
  }
`;

export default Post;
