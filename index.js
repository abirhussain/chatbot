const express = require("express");
const ejs = require("ejs");

const app = express();
const PORT = 8080;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("pages/index");
});

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
