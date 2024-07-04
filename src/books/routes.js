const { Router } = require("express");
const bookRouter = Router();

const Book = require("./model");

const { getAllBooks } = require("./constrollers");

const { addBook } = require("./constrollers");

const { updateBook } = require("./constrollers");

const { deleteBook } = require("./constrollers");

const { deleteBooksByAuthor } = require("./constrollers");

// getAllBooks
bookRouter.get("/books/getAllBooks", getAllBooks);

// addBook
bookRouter.post("/books/addBook", addBook);

//finds a book my title and changes the author
bookRouter.put("/books", updateBook);

// deleteBook
bookRouter.delete("/books/deleteBook", deleteBook);

//delete books from a specified author
bookRouter.delete("/books/byAuthor", deleteBooksByAuthor);

module.exports = bookRouter;
