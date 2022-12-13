const db = require("../db/connection");

exports.allCategories = () => {
  return db.query("SELECT * FROM categories;").then((result) => result.rows);
};

exports.allReviews = () => {
  return db
    .query(
      `SELECT owner, title, reviews.review_id, category, review_img_url, reviews.created_at, reviews.votes, designer, COUNT(comments.review_id) AS comment_count
    FROM reviews 
    LEFT JOIN comments ON comments.review_id = reviews.review_id
    GROUP BY reviews.review_id, comments.review_id
    ORDER BY reviews.created_at DESC;`
    )
    .then((result) => result.rows);
};
