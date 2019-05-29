const express = require("express");
const graphqlMiddleware = require("express-graphql");
const schema = require("../schema/schema");

const app = express();
const port = 3005;

app.use(
  "/graphql",
  graphqlMiddleware({
    schema,
    graphiql: true
  })
);

app.get("/", (req, res) => {
  res.send("GRAPH");
});

app.listen(port, err =>
  err ? console.log(err) : console.log(`SERVER START at PORT ${port}`)
);
