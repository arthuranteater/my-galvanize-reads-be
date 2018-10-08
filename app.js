const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 4000;
const queries = require("./queries");

app.use(bodyParser.json());
app.use(cors());

app.listen(port, (request, response) => {
  console.log(`listening on ${port}`);
});
