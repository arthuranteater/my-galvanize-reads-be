exports.up = function(knex, Promise) {
  return knex.schema.createTable("authors", author => {
    author.text("Book_Title");
    author.increments("Author_Id");
    author.text("First_Name");
    author.text("Last_Name");
    author.text("Bio");
    author.text("Author_Image");
    ssss
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("authors");
};
