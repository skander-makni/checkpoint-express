const express = require("express");

const app = express();
const port = 3000;
app.use(express.static("public"));
const checkDate = (req, res, next) => {
  const date = new Date();
  const day = date.getDay();
  const hour = date.getHours();
  if (day >= 1 && day <= 5 && hour >= 9 && hour <= 17) {
    next();
  } else {
    res.send("web application is not available");
  }
};
app.use(checkDate);
app.get("/home", (req, res) => {
  res.sendFile(__dirname + "/public/home.html");
});
app.get("/services", (req, res) => {
  res.sendFile(__dirname + "/public/services.html");
});
app.get("/contact", (req, res) => {
  res.sendFile(__dirname + "/public/contact.html");
});

app.listen(port, console.log("serveris running"));
