const express = require("express");

const mw = require("./middleware");

const userModel = require("./user-model");

const server = express();
server.use(express.json());

server.get("/api/kullanicilar", (req, res, next) => {
  try {
    let allUsers = userModel.getAllUsers();
    res.json(allUsers);
  } catch (error) {
    next(error);
  }
});

server.post(
  "/api/kayitol",
  mw.validateInput,
  mw.validateNewUser,
  (req, res, next) => {
    try {
      let user = req.body;
      let newUsers = userModel.createUsers(user);
      res.status(201).json(newUsers);
    } catch (error) {
      next(error);
    }
  }
);

server.post(
  "/api/giris",
  mw.validateInput,
  mw.validateLoginUser,
  (req, res, next) => {
    try {
      res.json({ messaga: "Hoşgeldin , giriş başarılı" });
    } catch (error) {
      next(error);
    }
  }
);

server.use((err, req, res, next) => {
  res.status(err.code || 500).json({ message: err.message });
});

module.exports = server;
