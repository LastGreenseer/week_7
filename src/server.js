require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const Book = require("./books/model")

const connection = require("./db/connection");

const app = express();

app.use(express.json());

connection();

//gettAllBooks
app.get("/books/getAllBooks", async (request, response) => {
  const allBooks = await Book.find({});
  console.log(allBooks);

  const successResponse = {
    message: "success",
    allBooks: allBooks,
  };

  response.send(successResponse);
});

// addBook
app.post("/books/addBook", async (request, response) => {
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
});


//finds a book my title and changes the author===============================================================
app.put("/books", async (request, response) => {
  const { title, newTitle, newAuthor } = request.body;

  //Uses Mongoose's `updateOne` method to find a book by its title and update its author
  try {
    const updatedBook = await Book.updateOne(
      { title: title },
      //The `$set` operator specifies the fields to update
      { $set: { author: newAuthor, title: newTitle } }
    );

    //respond with an error if book is not found
    if (updatedBook.matchedCount === 0) {
      return response.status(404).json({ message: "book not found" });
    }

    response.status(200).json({ message: "Book info updated successfully" });
    //catch any other errors that might occur during processing and return an error message
  } catch (error) {
    response
      .status(500)
      .json({ message: "An unexpected error has occured", error: error.message });
  }
});
//finds a book my title and changes the author================================================================

//deleteBook
app.delete("/books", async (request, response) => {});


app.listen(5001, () => {
  console.log(`Server is listening of port 5001`);
});
