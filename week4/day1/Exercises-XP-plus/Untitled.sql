-- SELECT * FROM students WHERE birth_date > '2000-01-01';

-- SELECT first_name, last_name FROM students WHERE user_id IN (5, 7);

-- SELECT first_name, last_name FROM students WHERE SUBSTRING(first_name FROM LENGTH(first_name) - 1 FOR 1) ILIKE 'a';

-- SELECT first_name, last_name FROM students WHERE first_name ILIKE '%a';

-- SELECT first_name, last_name FROM students WHERE first_name ILIKE 'a%';

-- SELECT first_name, last_name FROM students WHERE first_name ILIKE '%a%';

-- SELECT first_name, last_name FROM students WHERE first_name = 'Marc' OR last_name = 'Benichou';

-- SELECT first_name, last_name FROM students WHERE first_name = 'Marc' AND last_name = 'Benichou';

-- SELECT first_name, last_name FROM students WHERE user_id = 5

-- SELECT first_name, last_name FROM students WHERE user_id != 13

-- SELECT first_name, last_name FROM students 
-- ALTER SEQUENCE students_id RESTART WITH 1;

-- SELECT MAX(user_id) FROM students;
-- ALTER SEQUENCE students_user_id RESTART WITH (SELECT MAX(user_id) + 1 FROM students);

-- ALTER TABLE students
-- RENAME COLUMN id TO user_id;

-- ALTER TABLE students
-- ADD COLUMN id SERIAL PRIMARY KEY;


-- SELECT * FROM students --check situation

-- ALTER TABLE students
-- ADD COLUMN id SERIAL PRIMARY KEY;


-- INSERT INTO students (last_name, first_name, birth_date)
-- VALUES ('Viktor', 'Korneev', TO_DATE('03/23/1984', 'MM/DD/YYYY'));

-- UPDATE accounts
-- SET birth_date = TO_DATE(birth_date, 'MM/DD/YYYY');

-- INSERT INTO students (first_name, last_name, birth_date) VALUES 
-- 	('Mark', 'Benichou', TO_DATE('11/02/1998', 'MM/DD/YYYY')),
-- 	('Yoan', 'Cohen', TO_DATE('12/03/2010', 'MM/DD/YYYY')),
-- 	('Lea', 'Benichou', TO_DATE('07/27/1987', 'MM/DD/YYYY')),
-- 	('Amelia', 'Dux', TO_DATE('04/07/1996', 'MM/DD/YYYY')),
-- 	('David', 'Grez', TO_DATE('06/14/2003', 'MM/DD/YYYY')),
-- 	('Omer', 'Simpson', TO_DATE('10/03/1980', 'MM/DD/YYYY'))

-- ALTER TABLE accounts
-- RENAME COLUMN first_name1 TO first_name




-- CREATE TABLE students (
-- 	user_id serial PRIMARY KEY,
-- 	first_name varchar(99) NOT NULL,
-- 	last_name varchar(99) NOT NULL,
-- 	birth_date date
-- );