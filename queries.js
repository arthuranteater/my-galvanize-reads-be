const connection = require("./knexfile")[process.env.NODE_ENV || "development"];
const knex = require("knex")(connection);

let del = null;

module.exports = {
  getAll() {
    return knex
      .select()
      .from("books")
      .fullOuterJoin("authors", "Title", "Book_Title");
  },
  getBook(title) {
    return knex
      .select()
      .from("books")
      .fullOuterJoin("authors", "Title", "Book_Title")
      .where("Title", title);
  },
  deleteBook(title) {
    return knex("books")
      .where("Title", title)
      .del()
      .returning("*");
  },
  deleteAuthor(title) {
    return knex("authors")
      .where("Book_Title", title)
      .del()
      .returning("*");
  },
  addBook(body) {
    return knex("books")
      .insert(body)
      .returning("*");
  },
  addAuthor(body) {
    return knex("authors")
      .insert(body)
      .returning("*");
  },
  updateBook(id, body) {
    return knex("books")
      .update(body)
      .where("Id", id)
      .returning("*");
  },
  updateAuthorbyLast(last, body) {
    return knex("authors")
      .where("Last_Name", last)
      .update(body)
      .returning("*");
  },
  updateAuthorbyFirst(first, body) {
    return knex("authors")
      .where("First_Name", first)
      .update(body)
      .returning("*");
  }
};
