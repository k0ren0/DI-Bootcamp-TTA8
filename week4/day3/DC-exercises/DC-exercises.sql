--Part 1

CREATE TABLE Customer (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL
);

CREATE TABLE CustomerProfile (
    id SERIAL PRIMARY KEY,
    isLoggedIn BOOLEAN DEFAULT false,
    customer_id INTEGER REFERENCES Customer(id) UNIQUE
);

INSERT INTO Customer (first_name, last_name) VALUES
    ('John', 'Doe'),
    ('Jerome', 'Lalu'),
    ('Lea', 'Rive');

INSERT INTO CustomerProfile (isLoggedIn, customer_id) VALUES
    (true, (SELECT id FROM Customer WHERE first_name = 'John' AND last_name = 'Doe')),
    (false, (SELECT id FROM Customer WHERE first_name = 'Jerome' AND last_name = 'Lalu'));

SELECT Customer.first_name
FROM Customer
JOIN CustomerProfile ON Customer.id = CustomerProfile.customer_id
WHERE CustomerProfile.isLoggedIn = true;

SELECT Customer.first_name, COALESCE(CustomerProfile.isLoggedIn, false) AS isLoggedIn
FROM Customer
LEFT JOIN CustomerProfile ON Customer.id = CustomerProfile.customer_id;

SELECT COUNT(*) AS not_logged_in_count
FROM Customer
LEFT JOIN CustomerProfile ON Customer.id = CustomerProfile.customer_id
WHERE CustomerProfile.isLoggedIn IS NULL OR CustomerProfile.isLoggedIn = false;

--Part 2

CREATE TABLE Book (
    book_id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    author VARCHAR(255) NOT NULL
);

INSERT INTO Book (title, author) VALUES
    ('Alice In Wonderland', 'Lewis Carroll'),
    ('Harry Potter', 'J.K Rowling'),
    ('To kill a mockingbird', 'Harper Lee');
	
-- SELECT * FROM Book

CREATE TABLE Student (
    student_id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL UNIQUE,
    age INTEGER CHECK (age <= 15)
);

INSERT INTO Student (name, age) VALUES
	('John', 12),
	('Lera', 11),
	('Patrick', 10),
	('Bob', 14);
	
-- SELECT * FROM Student

CREATE TABLE Library (
    book_fk_id INTEGER,
    student_fk_id INTEGER,
    borrowed_date DATE,
    PRIMARY KEY (book_fk_id, student_fk_id),
    FOREIGN KEY (book_fk_id) REFERENCES Book (book_id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (student_fk_id) REFERENCES Student (student_id) ON DELETE CASCADE ON UPDATE CASCADE
);

-- SELECT * FROM Library

INSERT INTO Library (book_fk_id, student_fk_id, borrowed_date)
VALUES
    ((SELECT book_id FROM Book WHERE title = 'Alice In Wonderland'), (SELECT student_id FROM Student WHERE name = 'John'), '2022-02-15'),
    ((SELECT book_id FROM Book WHERE title = 'To kill a mockingbird'), (SELECT student_id FROM Student WHERE name = 'Bob'), '2021-03-03'),
    ((SELECT book_id FROM Book WHERE title = 'Alice In Wonderland'), (SELECT student_id FROM Student WHERE name = 'Lera'), '2021-05-23'),
    ((SELECT book_id FROM Book WHERE title = 'Harry Potter'), (SELECT student_id FROM Student WHERE name = 'Bob'), '2021-08-12');


-- --7 

--Select all the columns from the junction table

SELECT
    Library.*,
    Book.title AS book_title,
    Student.name AS student_name
FROM
    Library
JOIN
    Book ON Library.book_fk_id = Book.book_id
JOIN
    Student ON Library.student_fk_id = Student.student_id;

--Select the name of the student and the title of the borrowed books

SELECT
    Book.title AS book_title,
    Student.name AS student_name
FROM
    Library
JOIN
    Book ON Library.book_fk_id = Book.book_id
JOIN
    Student ON Library.student_fk_id = Student.student_id;
	

--Select the average age of the children, that borrowed the book Alice in Wonderland

SELECT ROUND(AVG(Student.age), 2) AS average_age
FROM Library
JOIN Book ON Library.book_fk_id = Book.book_id
JOIN Student ON Library.student_fk_id = Student.student_id;

--Delete a student from the Student table, what happened in the junction table ?

SELECT * FROM Library

-- Check in Library
SELECT COUNT(*) FROM Library WHERE student_fk_id = 2;

-- Delete in Library
DELETE FROM Student WHERE student_id = 2;

