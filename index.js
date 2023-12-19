const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({
    message: "API is working",
  });
});

app.listen(4001, () => {
  console.log("localhost:4001");
});
