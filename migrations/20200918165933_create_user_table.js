exports.up = function (knex) {
  return knex.schema.createTable("user", (t) => {
    t.increments("id").primary();
    t.string("username").notNullable();
    t.string("password").notNullable();
    t.timestamps(false, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("user");
};
