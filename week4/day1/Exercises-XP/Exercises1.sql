SELECT * FROM customers WHERE first_name != 'Scott';
-- ALTER TABLE customers
-- RENAME COLUMN item_first_name TO first_name

-- ALTER TABLE customers
-- RENAME COLUMN item_last_name TO last_name


-- SELECT * FROM customers WHERE last_name = 'Jones';
-- SELECT * FROM customers
-- SELECT * FROM customers WHERE last_name = 'Smith';
-- SELECT * FROM items WHERE price <= 300;
-- SELECT * FROM items WHERE price > 80;
-- SELECT * FROM items;

-- SELECT item_id FROM items
-- WHERE item_name = 'Small Desk';

-- UPDATE items
-- SET item_id = 3
-- WHERE item_id = 6;

-- ALTER TABLE items
-- RENAME COLUMN item_id TO id


-- INSERT INTO customers (item_first_name, item_last_name) VALUES 
-- 	('Greg', 'Jones'),
-- 	('Sandra', 'Jones'),
-- 	('Scott', 'Scott'),
-- 	('Trevor', 'Green'),
-- 	('Melanie', 'Johnson')


-- CREATE TABLE customers (
-- 	item_id serial PRIMARY KEY,
-- 	item_first_name varchar(255) NOT NULL,
-- 	item_last_name varchar(255) NOT NULL
-- )


-- SELECT * FROM items

-- INSERT INTO items (item_name, price) VALUES 
-- 	('Small Desk', 100),
-- 	('Large Desk', 300),
-- 	('Fan', 80);


-- CREATE TABLE items (
-- 	item_id serial PRIMARY KEY,
-- 	item_name varchar(255) NOT NULL,
-- 	size varchar(255) NOT NULL,
-- 	price integer NOT NULL
-- )





