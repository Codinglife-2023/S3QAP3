const { Pool } = require('pg');

const pool = new Pool({
    user: 'keyinstudent',        // Use your system's username
    host: 'localhost',
    database: 'bookstore',
    // No password is specified here
    port: 5432,
});

class Book {
    static async getAll() {
        const result = await pool.query('SELECT * FROM books');
        return result.rows;
    }

    static async create(book) {
        const { title, author, published_date, isbn, price, stock } = book;
        await pool.query(
            'INSERT INTO books (title, author, published_date, isbn, price, stock) VALUES ($1, $2, $3, $4, $5, $6)',
            [title, author, published_date, isbn, price, stock]
        );
    }

    static async getById(id) {
        const result = await pool.query('SELECT * FROM books WHERE id = $1', [id]);
        return result.rows[0];
    }

    static async update(id, book) {
        const { title, author, published_date, isbn, price, stock } = book;
        await pool.query(
            'UPDATE books SET title = $1, author = $2, published_date = $3, isbn = $4, price = $5, stock = $6 WHERE id = $7',
            [title, author, published_date, isbn, price, stock, id]
        );
    }

    static async delete(id) {
        await pool.query('DELETE FROM books WHERE id = $1', [id]);
    }
}

module.exports = Book;
