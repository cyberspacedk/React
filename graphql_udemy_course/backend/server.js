const express = require('express');
// middleware, lets get user queries
const expressGraphQL = require('express-graphql');

const app = express(); 

app.use('/graphql', expressGraphQL({
  graphiql: true
}))


app.get('/', (req,res)=> res.send("Server start at port 3000"))

app.listen(3000, (err)=> err ? console.log(err) : console.log("Server start at port 3000"))