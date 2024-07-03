const Book = require("./model");

const getAllBooks = async (request, response) => {
  //step 1: db interaction

  const books = await Book.find({});

  //step 2: create success object
  const successResponse = {
    message: "success",
    allBooks: books,
  };

  //step 3: responce

  response.send(successResponse);
};

module.exports = {
    getAllBooks: getAllBooks,
};