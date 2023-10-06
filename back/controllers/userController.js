const userService = require("../services/userService");
const validateRequiredFields = require("../utils/index");

const createUser = async (req, res) => {
  const user = req.body;

  const requiredFields = ["razaoSocial", "nomeFantasia", "cnpjCpf", "cidade", "estado"];
  const missingField = validateRequiredFields(requiredFields, user);

  if (missingField) {
    return res.status(400).json({ error: `O campo '${missingField}' não pode estar vazio.`, status: 400 });
  }

  try {
    const result = await userService.createUser(user);
    res.status(201).json({ data: result, status: 201 });
  } catch (error) {
    errorHandler(error, res);
  }
};


const getUsers = async (req, res) => {
  try {
    const result = await userService.getUsers();
    res.status(200).json({ data: result, status: 200 });
  } catch (error) {
    errorHandler(error, res);
  }
};

const updateUser = async (req, res) => {
  const { idperson } = req.params;
  const user = req.body;
  try {
    const result = await userService.updateUser(idperson, user);
    res.status(200).json({ data: result, status: 200 });
  } catch (error) {
    errorHandler(error, res);
  }
};

const deleteUser = async (req, res) => {
  const { idperson } = req.params;
  try {
    const result = await userService.deleteUser(idperson);
    res.status(200).json({ data: result, status: 200 });
  } catch (error) {
    errorHandler(error, res);
  }
};

module.exports = {
  createUser,
  getUsers,
  updateUser,
  deleteUser,
};
