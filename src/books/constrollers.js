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
}

const updateBook = async (request, response) => {
    const { title, newAuthor, newTitle } = request.body;

  //Uses Mongoose's `updateOne` method to find a book by its title and update its author
  try {
    const updatedBook = await Book.updateOne(
      { title: title },
      //The `$set` operator specifies the fields to update
      { $set: { author: newAuthor, title: newTitle } }
    );

    //respond with an error if book is not found
    if (updatedBook.matchedCount === 0) {
      return response.status(404).json({ message: "Book does not exist" });
    }

    response.status(200).json({ message: "Book info has successfully been updated!" });
    //catch any other errors that might occur during processing and return an error message
  } catch (error) {
    response
      .status(500)
      .json({
        message: "An unexpected error has occured",
        error: error.message,
      });
  }
}


module.exports = {
    getAllBooks: getAllBooks, addBook, updateBook
};