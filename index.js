const express = require("express");
const app = express();
const userRoute = require("./routes/users.routes.js");
require("dotenv").config();
const authenticationMiddleware = require("./middlewares/authentication.middleware.js");
app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.urlencoded({ extended: false }));
app.use(express.json({ limit: 4000 }));
app.get("/", function (req, res) {
  res.send("server is running");
});

app.use("/users", authenticationMiddleware, userRoute);

app.use(function (err, req, res, next) {
  res.send(err.message);
});

app.listen(process.env.PORT ?? 3000, function () {
  console.log(`Server running port ${process.env.PORT ?? 3000}`);
});
