const { allCategories } = require("../models/games");


exports.getCategories = (request, response) => {
    allCategories(response).then((category) => {
      response.status(200).send({ category });
    });
  };
