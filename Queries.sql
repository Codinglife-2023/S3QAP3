CREATE TABLE books (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    author VARCHAR(255) NOT NULL,
    published_date DATE,
    isbn VARCHAR(13) UNIQUE,
    price DECIMAL(10, 2),
    stock INT DEFAULT 0
);

INSERT INTO books (title, author, published_date, isbn, price, stock)
VALUES ('The Great Gatsby', 'F. Scott Fitzgerald', '1925-04-10', '9780743273565', 10.99, 5);

SELECT * FROM books WHERE author = 'F. Scott Fitzgerald';

UPDATE books SET price = 12.99 WHERE isbn = '9780743273565';

DELETE FROM books WHERE isbn = '9780743273565';

