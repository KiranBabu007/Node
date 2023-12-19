const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.sendFile("./views/admin.html", { root: __dirname });
});
app.get("/submit", (req, res) => {
  res.sendFile("./views/signup.html", { root: __dirname });
});
app.get("/submit-1", (req, res) => {
  res.redirect("/submit");
});

app.listen(7000, () => console.log("Server running on port 7000"));
