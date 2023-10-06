const userModel = require("../models/userModel");

const createUser = async (user) => {
    const result = await userModel.createUser(user);
    return result;
};

const getUsers = async () => {
    const result = await userModel.getUsers();
    return result;
};

const updateUser = async (idperson, user) => {
    const result = await userModel.updateUser(idperson, user);
    return result;
};

const deleteUser = async (idperson) => {
    const result = await userModel.deleteUser(idperson);
    return result;
};

module.exports = {
  createUser,
  getUsers,
  updateUser,
  deleteUser,
};
