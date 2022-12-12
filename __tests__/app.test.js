const request = require("supertest");
const testData = require("../db/data/test-data");
const seed = require("../db/seeds/seed");
const { app } = require("../app");
const db = require("../db/connection")

afterAll(() => {
  if (db.end) {
    return db.end()}
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
});