const express = require("express");
const api = require("./_api");

const server = express();

server.get("/", (req, res) => {
  res.send("GRAPH");
});

server.use("/api", api);

// server.listen(3000, () => console.log("SERVER START"));
