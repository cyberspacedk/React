const qraphql = require('graphql');

const  {
  GrapQLObjectType,
  GraphQLString,
  GraphQLInt
} = graphql;

const UserType = new GrapQLObjectType({
  name: 'User',
  fields: {
    id: {type: GraphQLString},
    firstName: {type: GraphQLString},
    age: {type: GraphQLInt}
  }

})