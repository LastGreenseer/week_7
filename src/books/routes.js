const { Router } = require("express");
const bookRouter = Router();

const Book = require("./model");

const { getAllBooks } = require("./constrollers");

const { addBook } = require("./constrollers");

const { updateBook } = require("./constrollers");

// getAllBooks
bookRouter.get("/books/getAllBooks", getAllBooks);

// addBook
bookRouter.post("/books/addBook", addBook);

//finds a book my title and changes the author
bookRouter.put("/books", updateBook);

module.exports = bookRouter;
