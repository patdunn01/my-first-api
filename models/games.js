const db = require("../db/connection");

exports.allCategories = () => {
    return db.query("SELECT * FROM categories;").then((result) => result.rows);
  };