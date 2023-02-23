const {
  getAllUsers,
  createUser,
  findUser,
  checkUserName,
} = require("./user-model");

//Logger

function validateInput(req, res, next) {
  const { kullaniciadi, sifre } = req.body;

  if (!kullaniciadi || !sifre) {
    res.status(400).json({ message: "Eksik alan var" });
  } else {
    req.user = { kullaniciadi: kullaniciadi, sifre: sifre };
    next();
  }
}

function validateNewUser(req, res, next) {
  const { kullaniciadi, sifre } = req.body;

  let isExistUserName = checkUserName(kullaniciadi);
  if (isExistUserName) {
    res
      .status(400)
      .json({ message: `${kullaniciadi} daha önce kullanılmıştır` });
  } else {
    req.user = { kullaniciadi: kullaniciadi, sifre: sifre };
    next();
  }
}

function validateLoginUser(req, res, next) {
  const { kullaniciadi, sifre } = req.body;
  let isExistUser = findUser({ kullaniciadi: kullaniciadi, sifre: sifre });
  if (!isExistUser) {
    res.status(404).json({ mesage: "Böyle bir kullanıcı yok" });
  } else {
    next();
  }
}

module.exports = { validateNewUser, validateLoginUser, validateInput };
