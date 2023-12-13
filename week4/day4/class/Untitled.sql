-- transactions

-- commit 
-- rollback

CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    cost INT NOT NULL
);

-- Select all records from the products table
SELECT * FROM products;

-- Insert a new record into the products table
INSERT INTO products (title, cost)
VALUES ('iMacx', 1000);

INSERT INTO products (title, cost)
VALUES ('iMacProMax', 2500);