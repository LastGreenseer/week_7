const Book = require("./model");

const getAllBooks = async (request, response) => {
  //step 1: db interaction

  const books = await Book.find({});

  //step 2: create success object
  const successResponse = {
    message: "Success!",
    allBooks: books,
  };

  //step 3: responce

  response.send(successResponse);
};

//add a new book
const addBook = async (request, response) => {
  const book = await Book.create({
    title: request.body.title,
    author: request.body.author,
    genre: request.body.genre,
  });

  const successResponse = {
    message: "Book added successfully!",
    book: book,
  };

  response.send(successResponse);
};

//===========================================================find a book by title and update the title and author====================================================
const updateBook = async (request, response) => {
  const { title, newTitle, newAuthor, newGenre } = request.body;
  //const {title, ...updateFields} = request.body

  //Uses Mongoose's `updateOne` method to find a book by its title and update its author
  // try {
  //   const updatedBook = await Book.updateOne(
  //     { title: title },
  //The `$set` operator specifies the fields to update
  //   { $set: updatedFields }
  // );

  //respond with an error if book is not found
  // if (updatedBook.matchedCount === 0) {
  //   return response.status(404).json({ message: "Book does not exist" });
  // }

  //simplified version of above code. allows fields to be updated individually by extracting them explicitly
  try {
    const updateObject = {};
    if (newTitle) updateObject.title = newTitle;
    if (newAuthor) updateObject.author = newAuthor;
    if (newGenre) updateObject.genre = newGenre;

    //Uses Mongoose's `updateOne` method to find a book by its title
    const updatedBook = await Book.updateOne(
      { title: title },
      { $set: updateObject }
    );

    //HTTP Status Codes are standardized codes returned by the server to indicate the outcome of an HTTP request.
    //there are 5 catogories, of which I have used have used 3:
    //404 is a client error, 200 is a success and 500 is for server errors

    if (updatedBook.matchedCount === 0) {
      return response.status(404).json({ message: "Book does not exist" });
    }

    response
      .status(200)
      .json({ message: "Book info has successfully been updated!" });
    //catch any other errors that might occur during processing and return an error message
  } catch (error) {
    response.status(500).json({
      message: "An unexpected error has occured",
      error: error.message,
    });
  }
};

//=====================================================end of find a book by title and update the title and author====================================================

//==========================================================================delete a book=============================================================================
const deleteBook = async (request, response) => {
  //extract the title of the book to be deleted from the request body
  const { title } = request.body;

  //use mongoose's `deleteOne` method to delete the book with that title
  try {
    const deletedBook = await Book.deleteOne({ title: title });

    //if the deleteCount is 0, no book with that title was found
    //thus an error message is returned with 'response.status(404)'
    if (deletedBook.deletedCount === 0) {
      return response.status(404).json({ message: "Book does not exist" });
    }

    //otherwise the book was deleted and it responds with a 200 status, indicating a success
    //catch will catch any errors that occur during operation and respond with a 500 status and an error message
    response.status(200).json({ message: "Book deleted successfully!" });
  } catch (error) {
    response.status(500).json({
      message: "An unexpected error has occured",
      error: error.message,
    });
  }
};
//==========================================================================delete a book end============================================================================

module.exports = { getAllBooks, addBook, updateBook, deleteBook };
