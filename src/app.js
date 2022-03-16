const express = require("express");
const app = express();
const path = require("path");
const port = 3000;

app.use(express.static("public"));

app.listen(port, () => console.log("server ok"));

app.get("/", (req, res) => res.sendFile(path.join(__dirname, "views", "home.html")));
app.get("/register.html", (req, res) => res.sendFile(path.join(__dirname, "views", "register.html")));
app.get("/login.html", (req, res) => res.sendFile(path.join(__dirname, "views", "login.html")));