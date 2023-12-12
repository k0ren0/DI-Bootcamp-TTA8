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



--  -- Exercise 2 : DVD Rental

-- -- 1
SELECT * FROM film

UPDATE film 
SET language_id = (
    SELECT language_id
    FROM language
    WHERE name IN ('Mandarin', 'French', 'German')
    ORDER BY RANDOM()
    LIMIT 1
)
WHERE film_id IN (
    SELECT film_id
    FROM film
    ORDER BY RANDOM()
    LIMIT 10
);

-- -- 2

-- To find the foreign keys in the customer table, check the table definition or use the following query:

SELECT conname AS foreign_key_name
FROM pg_constraint
WHERE confrelid = 'customer'::regclass;


-- -- 3

-- Dropping the "customer_review" table in PostgreSQL is a standard operation, but ensure data isn't needed and perform a backup before proceeding. You can use:

DROP TABLE IF EXISTS customer_review;

-- -- 4

-- SELECT * FROM rental

SELECT COUNT(*)
FROM rental
WHERE return_date IS NULL;

-- -- 5

-- SELECT * FROM inventory
-- SELECT * FROM rental

SELECT title, replacement_cost
FROM film
WHERE film_id IN (
    SELECT film_id
    FROM rental
    WHERE return_date IS NULL
)
ORDER BY replacement_cost DESC
LIMIT 30;

-- -- 6

-- Fist film

SELECT * FROM film
SELECT * FROM category
SELECT * FROM actor

SELECT f.title, f.description, f.fulltext, c.name
FROM film f
JOIN film_category fc ON f.film_id = fc.film_id
JOIN category c ON fc.category_id = c.category_id
JOIN film_actor fa ON f.film_id = fa.film_id
JOIN actor a ON fa.actor_id = a.actor_id
WHERE c.name = 'Sports'
    AND a.first_name = 'Penelope' AND a.last_name = 'Monroe';

-- Second film

SELECT title, description
FROM film
WHERE length < '60' AND rating = 'R';

-- Third film

SELECT f.title, r.rental_date, r.return_date, r.rental_rate
FROM rental r
JOIN film f ON r.film_id = f.film_id
JOIN customer c ON r.customer_id = c.customer_id
WHERE c.first_name = 'Matthew' AND c.last_name = 'Mahan'
  AND r.rental_rate > 4.00
  AND r.return_date BETWEEN '2005-07-28' AND '2005-08-01';

















