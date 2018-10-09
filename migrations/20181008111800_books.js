exports.up = function(knex, Promise) {
  return knex.schema.createTable("books", book => {
    book.increments("Id");
    book.text("Title");
    book.text("Genre");
    book.text("Description");
    book.text("Image");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("books");
};
