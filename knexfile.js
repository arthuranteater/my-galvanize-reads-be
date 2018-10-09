// Update with your config settings.

module.exports = {
  development: {
    client: "pg",
    connection: "postgresql://localhost/my-galvanize-reads"
  },

  production: {
    client: "pg",
    connection: process.env.DATABASE_URL
  }
};
