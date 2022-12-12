const express = require("express");
const app = express();

app.use(express.json());

const { getCategories } = require("./controllers/games");
const { handle404Errors } = require("./controllers/games.errors")
  
app.get("/api/categories", getCategories);

app.all('*', handle404Errors);

module.exports = { app };

