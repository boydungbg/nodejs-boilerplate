const express = require("express");
const { getList } = require("../controllers/users.controller");
const route = express.Router();

route.get("/", getList);
route.get("/:id", function (req, res) {
  res.send("Get users detail");
});

route.post("/", function (req, res) {});
route.put("/", function (req, res) {});
route.delete("/", function (req, res) {});

module.exports = route;
