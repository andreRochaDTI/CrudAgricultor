exports.up = function (knex) {
    return knex.schema.createTable('person', function (table) {
      table.increments('idperson').primary();
      table.string('razaoSocial');
      table.string('nomeFantasia');
      table.string('cnpjCpf');
      table.string('celular');
      table.string('cidade');
      table.string('estado');
    });
  };
  
  exports.down = function (knex) {
  };
  
