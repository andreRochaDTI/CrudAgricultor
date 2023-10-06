const db = require("../config/dbConfig");

const createUser = (user) => {
  return new Promise((resolve, reject) => {
    const { razaoSocial, nomeFantasia, cnpjCpf, celular, cidade, estado } = user;
    const SQL = "INSERT INTO person (razaoSocial, nomeFantasia, cnpjCpf, celular, cidade, estado) VALUES (?, ?, ?, ?, ?, ?)";
    db.query(SQL, [razaoSocial, nomeFantasia, cnpjCpf, celular, cidade, estado], (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};

const getUsers = () => {
  return new Promise((resolve, reject) => {
    const SQL = "SELECT * FROM person";
    db.query(SQL, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};

const updateUser = (idperson, user) => {
  return new Promise((resolve, reject) => {
    const { razaoSocial, nomeFantasia, cnpjCpf, celular, cidade, estado } = user;
    const SQL = "UPDATE person SET razaoSocial = ?, nomeFantasia = ?, cnpjCpf = ?, celular = ?, cidade = ?, estado = ? WHERE idperson = ?";
    db.query(SQL, [razaoSocial, nomeFantasia, cnpjCpf, celular, cidade, estado, idperson], (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};

const deleteUser = (idperson) => {
  return new Promise((resolve, reject) => {
    const SQL = "DELETE FROM person WHERE idperson = ?";
    db.query(SQL, idperson, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};

module.exports = {
  createUser,
  getUsers,
  updateUser,
  deleteUser,
};
