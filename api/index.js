const http = require("http");
const express = require("express");
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(80, () => {

  console.log("HTTP Server running on port 80");
});
