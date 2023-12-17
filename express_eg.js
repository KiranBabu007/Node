const express = require("express");
const app = express();
const path = require("path");

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "signup.html"));
});

app.listen(7000, () => console.log("Server running on port 7000"));
