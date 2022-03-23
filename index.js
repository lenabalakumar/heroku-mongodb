const express = require("express");
const mongoose = require("mongoose");
const Blog = require("./models/blog");

const app = express();

const PORT = 9000;
const dbURI =
  "mongodb+srv://tobydoby:987654321@cluster0.f0vll.mongodb.net/TodoDB?retryWrites=true&w=majority";

mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => app.listen(PORT))
  .catch((err) => console.log("err" + err));

app.get("/add-blog", (req, res) => {
  const blog = new Blog({
    title: "new blog",
    snippet: "About new blog",
    body: "More about new blog",
  });

  blog
    .save()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/hello", (req, res) => {
  res.send("Hello from /hello");
});
