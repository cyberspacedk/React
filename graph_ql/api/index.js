const express = require('express');
// перехватывает запросы и обрабатывает их
const graphqlMiddleware = require('express-graphql');

const schema = require('./schema');
const resolvers = require('./resolvers');
const api = express();


api.all('/graphql', graphqlMiddleware({
    schema, 
    rootValue: resolvers,
    graphiql: true
}));




module.exports = api;