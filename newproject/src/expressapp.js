const express = require("express");
const app = express();
const port = process.env.Port || 3003;
require("./Conn");

app.get("/", (req, res) => {
  res.send("Hello World4!");
});

// app.get("/about", (req, res) => {
//   res.send("namaste2 World!");
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
