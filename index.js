const express = require("express");
const postRouter = require("./routes/post.routes");

const app = express();
app.get("/", (req, res) => {
  res.status(200).send("Welcome to my server");
});
app.use("/posts", postRouter);

app.listen(4000, () => {
  console.log("server listening on http://localhost:4000");
});
