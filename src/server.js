const express = require("express");

const app = express();

app.use(express.json());

const fakeData = [
  { id: 1, title: "book1", author: "author1", genre: "genre1" },
  { id: 2, title: "book2", author: "author2", genre: "genre2" },
  { id: 3, title: "book3", author: "author3", genre: "genre3" },
];

// example
app.get("/books", (request, response) => {
  // console.log(request.path, " :", typeof request.path);
  //   console.log(response);
  response.send("Hello from /books");
});

// getAllBooks
app.get("/books/getAllBooks", (request, response) => {
  // console.log (request.path);

  const successResponse = {
    message: "success",
    books: fakeData,
  };

  response.send(successResponse);
});

// addBook
app.post("/books/addBook", (request, response) => {
  //   console.log(request.body);
  fakeData.push(request.body);

  const successResponse = {
    message: "success",
    books: fakeData,
  };

  response.send(successResponse);
});

//updateBook
app.put("/books", (request, response) => {
  // in here, find a book by title (i.e. an element of fakeArr where the element title is the same as request.body.title)
  // change (update) the author to an new name
  console.log(request.body);
  //function to find the book title
  function findBook(x) {
    return x.title === request.body.title;
  }

  const index = fakeData.findIndex(findBook);

  //Check if the book exists
  if (index === -1) {
    const failureResponse = {
      message: `${request.body.title} not found`,
    };
    response.send(failureResponse);
    return;
  }

  //   updates the title of the found book to the new title provided in the request body.
  fakeData[index].title = request.body.newTitle;

  const successResponse = {
    message: "success",
    books: fakeData[index],
  };

  response.send(successResponse);
});

app.delete("/books", (request, response) => {
  // in here, find a book by title (i.e. an element of fakeArr where the element title is the same as request.body.title)
  // remove (delete) the element from the array

  const index = fakeData.findIndex((book) => book.title === request.body.title);

  if (index === -1) {
    const failureResponse = {
      message: `${resuest.body.title} not found`,
    };
    response.send(failureResponse);
    return;
  }

  //Update the title of the found book
  fakeData.splice(index, 1);

  const successResponse = {
    message: "success",
    books: fakeData,
  };

  response.send(successResponse);
});

app.listen(5001, () => {
  console.log(`Server is listening of port 5001`);
});
