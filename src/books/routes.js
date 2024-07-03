const {Router} = require("express");
const bookRouter = Router();

const Book = require("./model");

const {getAllBooks} = require("./constrollers");

// getAllBooks
bookRouter.get("/books/getAllBooks", getAllBooks);

module.exports = bookRouter;
