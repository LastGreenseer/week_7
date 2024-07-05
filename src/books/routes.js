const { Router } = require("express");
const bookRouter = Router();

const Book = require("./model");

const { getAllBooks } = require("./constrollers");

const { addBook } = require("./constrollers");

const { updateBook } = require("./constrollers");

const { deleteBook } = require("./constrollers");

const { deleteBooksByAuthor } = require("./constrollers");

const { deleteAllBooks } = require("./constrollers");

const { findBookByTitle } = require("./constrollers");

// getAllBooks
bookRouter.get("/books/getAllBooks", getAllBooks);

// addBook
bookRouter.post("/books/addBook", addBook);

//finds a book my title and changes the author
bookRouter.put("/books/updateBook", updateBook);

// deleteBook
bookRouter.delete("/books/deleteBook", deleteBook);

//delete books from a specified author
bookRouter.delete("/books/byAuthor", deleteBooksByAuthor);

//delete all books in database
bookRouter.delete("/books/deleteAllBooks", deleteAllBooks);

//get a single book by its title
bookRouter.get("/books/byTitle", findBookByTitle);

module.exports = bookRouter;
