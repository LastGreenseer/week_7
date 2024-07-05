require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const Book = require("./books/model");

const connection = require("./db/connection");

const bookRouter = require("./books/routes");

const app = express();

app.use(cors());

app.use(express.json());

connection();

app.use(bookRouter);

app.listen(5001, () => {
  console.log(`Server is listening of port 5001`);
});
