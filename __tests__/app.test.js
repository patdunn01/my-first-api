const request = require("supertest");
const testData = require("../db/data/test-data");
const seed = require("../db/seeds/seed");
const { app } = require("../app");
const db = require("../db/connection");

afterAll(() => {
  if (db.end) {
    return db.end();
  }
});
beforeEach(() => seed(testData));

describe("Standard error messages", () => {
  it("Returns a 404 error when given a bad request", () => {
    return request(app)
      .get("/api/banana")
      .expect(404)
      .then(({ body: { msg } }) => {
        expect(msg).toBe("No such path found. Try again...");
      });
  });
});

describe("1. GET request.", () => {
  test("sends back an array of games categories", () => {
    return request(app)
      .get("/api/categories")
      .expect(200)
      .then(({ body }) => {
        expect(body.category).toBeInstanceOf(Array);
        expect(body.category.length).toBeGreaterThan(0);
        const categoryArr = body.category;
        categoryArr.forEach((category) => {
          expect(category).toEqual(
            expect.objectContaining({
              slug: expect.any(String),
              description: expect.any(String),
            })
          );
        });
      });
  });
  test("sends back an array of games reviews", () => {
    return request(app)
      .get("/api/reviews")
      .expect(200)
      .then(({ body }) => {
        expect(body.review).toBeInstanceOf(Array);
        expect(body.review.length).toBeGreaterThan(0);
        const reviewArr = body.review;
        reviewArr.forEach((review) => {
          expect(review).toEqual(
            expect.objectContaining({
              owner: expect.any(String),
              title: expect.any(String),
              review_id: expect.any(Number),
              category: expect.any(String),
              review_img_url: expect.any(String),
              created_at: expect.any(String),
              votes: expect.any(Number),
              designer: expect.any(String),
              comment_count: expect.any(String),
            })
          );
        });
      });
  });
});
