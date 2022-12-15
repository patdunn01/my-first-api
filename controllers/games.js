const {
  allCategories,
  allReviews,
  getReviewByRequest,
  getCommentsByReviewId,
} = require("../models/games");

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
    response.status(200).send({ review });
  });
};

exports.getCommentsById = (request, response) => {
  const review_id = request.params.review_id;
  getCommentsByReviewId(review_id).then((comments) => {
    const validReviewIDs = [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12",
      "13",
    ];
    if (!validReviewIDs.includes(review_id)) {
      response.status(404).send({ msg: "No such path found. Try again..." });
    } else if (validReviewIDs.includes(review_id) && comments.length === 0) {
      response
        .status(200)
        .send({ msg: "No Comments found for this review id" });
    } else if (validReviewIDs.includes(review_id) && comments.length !== 0) {
      response.status(200).send({ comments });
    }
  });
};
