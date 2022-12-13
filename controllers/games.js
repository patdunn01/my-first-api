const { allCategories, allReviews, getReqReview } = require("../models/games");

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
  console.log(review_id, "review_id")
  getReqReview(review_id).then((review) => {
    response.status(200).send({ review })
    console.log(review)
  })
};
