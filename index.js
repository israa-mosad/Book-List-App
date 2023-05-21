const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.json([
    {
      "title": "The Hitchhiker's Guide to the Galaxy",
      "author": "Douglas Adams",
      "year": 1979
    },
    {
      "title": "The Lord of the Rings",
      "author": "J.R.R. Tolkien",
      "year": 1954
    },
    {
      "title": "The Catcher in the Rye",
      "author": "J.D. Salinger",
      "year": 1951
    }
  ]);
});

app.listen(3000);
