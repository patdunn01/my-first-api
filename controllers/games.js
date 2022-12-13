const { allCategories, allReviews, getReviewByRequest } = require("../models/games");

exports.getCategories = (request, response) => {
  allCategories(response).then((category) => {
    response.status(200).send({ category });
  });
};

exports.getReviews = (request, response) => {
  allReviews(response).then((review) => {
    response.status(200).send({ review });
  });
};

exports.getReviewsById = (request, response) => {
  const { review_id } = request.params;
  getReviewByRequest(review_id).then((review) => {
    response.status(200).send({ review })
  })
};
