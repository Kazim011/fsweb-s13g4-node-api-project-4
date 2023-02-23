const { v1: uuidv1 } = require("uuid");

function createId() {
  return uuidv1();
}

const initialUsers = () => {
  let initialUsers = [
    {
      id: createId(),
      kullaniciadi: "kazim",
      sifre: "kazim1977",
    },
    {
      id: createId(),
      kullaniciadi: "kazim1",
      sifre: "kazim1977",
    },
    {
      id: createId(),
      kullaniciadi: "kazim2",
      sifre: "kazim1977",
    },
    {
      id: createId(),
      kullaniciadi: "kazim3",
      sifre: "kazim1977",
    },
  ];
  return initialUsers;
};

let users = initialUsers();

const getAllUsers = () => {
  return users;
};

const createUsers = (user) => {
  user.id = createId();
  users.push(user);
  return user;
};

const findUser = (user) => {
  let isExistUserName = false;
  for (let i = 0; i < users.length; i++) {
    const userItem = users[i];

    if (
      userItem.kullaniciadi == user.kullaniciadi &&
      userItem.sifre == user.sifre
    ) {
      isExistUserName = true;
      break;
    }
  }
  return isExistUserName;
};

const checkUserName = (kullaniciadi) => {
  let isExistUserName = false;
  for (let i = 0; i < users.length; i++) {
    const userItem = users[i];

    if (userItem.kullaniciadi == kullaniciadi) {
      isExistUserName = true;
      break;
    }
  }
  return isExistUserName;
};

module.exports = {
  getAllUsers,
  findUser,
  createUsers,
  checkUserName,
};
