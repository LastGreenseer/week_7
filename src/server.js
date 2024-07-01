const express = require("express");

const app = express();

app.use("/example", express.static("example"));

app.use ("/activity", express.static("activity"));

app.listen(5001, () => {
  console.log(`Server is listening of port 5001`);
});
