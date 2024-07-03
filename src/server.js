require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const Book = require("./books/model");

const connection = require("./db/connection");

const bookRouter = require("./books/routes");

const app = express();

app.use(express.json());

connection();

app.use(bookRouter);

//deleteBook
app.delete("/books", async (request, response) => {});

app.listen(5001, () => {
  console.log(`Server is listening of port 5001`);
});
