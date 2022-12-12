DROP DATABASE IF EXISTS nc_games_test;

CREATE DATABASE nc_games_test;

\c nc_games_test

CREATE TABLE categories (
    slug VARCHAR(40),
    description TEXT
);

INSERT INTO categories 
    (slug, description)
VALUES
    ('euro game', 'Abstact games that involve little luck'),
    ('social deduction', 'Players attempt to uncover each other''s hidden role'),
    ('dexterity', 'Games involving physical skill'),
    ('children''s games', 'Games suitable for children');

SELECT * FROM categories;