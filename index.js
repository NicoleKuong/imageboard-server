const express = require("express");
const app = express();
const port = process.env.PORT || 4000;
const db = require("./db");
const image = require("./image/model");

app.listen(port, () =>
  console.log(`Greetings! Imageboard server listening on port ${port}!`)
);
