module.exports = {
    development: {
      client: 'mysql',
      connection: {
        host: 'localhost',
        user: 'root',
        password: 'teste',
        database: 'crudatto',
      },
      migrations: {
        directory: './migrations',
      },
    },
  };
  