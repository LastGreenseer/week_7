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


const addBook = async (request, response) => {
    const book = await Book.create({
      title: request.body.title,
      author: request.body.author,
      genre: request.body.genre,
    });

     const successResponse = {
    message: "success",
    book: book,
  };

  response.send(successResponse);
}


module.exports = {
    getAllBooks: getAllBooks, addBook,
};