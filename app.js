const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 4000;
const queries = require("./queries");

app.use(bodyParser.json());
app.use(cors());

app.listen(port, (req, res) => {
  console.log(`listening on ${port}`);
});

app.get("/book", (req, res) => {
  queries.getAll().then(result => res.json({ result }));
});

app.get("/book/:title", (req, res) => {
  queries.getBook(req.params.title).then(result => res.json({ result }));
});

app.post("/book", (req, res) => {
  queries.addBook(req.body).then(result => res.json({ result }));
});

app.post("/author", (req, res) => {
  queries.addAuthor(req.body).then(result => res.json({ result }));
});

app.put("/book/:id", (req, res) => {
  queries
    .updateBook(req.params.id, req.body)
    .then(result => res.json({ result }));
});

app.put("/author/:last", (req, res) => {
  queries
    .updateAuthorbyLast(req.params.last, req.body)
    .then(result => res.json({ result }));
});

app.put("/author/:first", (req, res) => {
  queries
    .updateAuthorbyFirst(req.params.first, req.body)
    .then(result => res.json({ result }));
});

app.delete("/book/:title", (req, res) => {
  queries.deleteBook(req.params.title).then(() => {
    queries
      .deleteAuthor(req.params.title)
      .then(() => res.send(`deleted ${req.params.title}`));
  });
});
