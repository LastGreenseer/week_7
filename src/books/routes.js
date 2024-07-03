const {Router} = require("express");
const bookRouter = Router();

const Book = require("./model");

bookRouter.get("/books/getAllBooks", async (request, response) => {
  
    const books = await Book.find({})

  // getAllBooks
  const successResponse = {
    message: "success",
    allBooks: allBooks,
  };

  response.send(successResponse);
});


