const {Router} = require("express");
const bookRouter = Router();

const Book = require("./model");

const {getAllBooks} = require("./constrollers");

const { addBook } = require("./constrollers");

// getAllBooks
bookRouter.get("/books/getAllBooks", getAllBooks);

// addBook
bookRouter.post("/books/addBook", addBook);

module.exports = bookRouter;