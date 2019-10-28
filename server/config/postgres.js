const { Pool } = require("pg");

module.exports = app => {
  /**
   * @TODO: Configuration Variables
   *
   *  Retrieve the necessary information to connect to Postgres
   *  For example: app.get('PG_DB')
   */
  return new Pool({
    host: app.get("PG_HOST"),
    password: app.get("PG_PASSWORD"),
    database: app.get("PG_DB"),
    user: app.get("PG_USER"),
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000
  });
};
