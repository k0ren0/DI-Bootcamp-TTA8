--Exercise 1: DVD Rental

-- --1
SELECT name 
FROM language

-- --2
SELECT * FROM language;

SELECT 
    film.title, film.description, language.name
FROM 
    film
JOIN
    language ON film.language_id = language.language_id;

-- --3
SELECT
    film.title, film.description, language.name
FROM 
    language
LEFT JOIN
    film ON language.language_id = film.language_id;

-- --4
CREATE TABLE new_film (
    id SERIAL PRIMARY KEY,
    name VARCHAR(55) NOT NULL
);

INSERT INTO new_film (name) VALUES 
	('Greg rukin-nogznicy'),
	('Who stole the new year'),
	('Who is the mustachioed babysitter')

-- SELECT * FROM new_film

-- --5
CREATE TABLE customer_review (
    review_id SERIAL PRIMARY KEY,
    film_id INT REFERENCES new_film(id) ON DELETE CASCADE,
    language_id INT REFERENCES language(language_id) ON DELETE CASCADE,
    title VARCHAR(55) NOT NULL,
    score INT CHECK (score >= 1 AND score <= 10),
    review_text TEXT,
    last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP

);

-- --6

INSERT INTO new_film (name) VALUES
	('Greg rukin-nogznicy'),
	('Who stole the new year'),
	('Who is the mustachioed babysitter')

INSERT INTO customer_review (film_id, language_id, title, score, review_text, last_update) VALUES 
    (1, 1, 'Excellent movie!', 9, 'Highly recommend to everyone. Very interesting plot.', CURRENT_TIMESTAMP),
    (2, 2, 'Not impressed', 5, 'Expected more. The plot seemed predictable.', CURRENT_TIMESTAMP),
    (3, 3, 'A must-watch!', 8, 'Incredible film with great performances.', CURRENT_TIMESTAMP);


-- SELECT * FROM new_film
-- SELECT * FROM customer_review 

-- --7
DELETE FROM new_film
WHERE id = 3;


-- SELECT
--     new_film.id AS film_id,
--     new_film.name AS film_name,
--     customer_review.review_id,
--     customer_review.title,
--     customer_review.score,
--     customer_review.review_text,
--     customer_review.last_update
-- FROM
--     new_film
-- JOIN
--     customer_review ON new_film.id = customer_review.film_id;





