require('dotenv').config();

module.exports = {
  "development": {
      "username": process.env.DB_USERNAME,
      "password": process.env.DB_PASSWORD,
      "database": process.env.DB_DATABASE,
      "host": "localhost",
      "dialect": "mysql"
  },
  "test": {
      "username": "root",
      "password": null,
      "database": "techblog_db_test",
      "host": "127.0.0.1",
      "dialect": "mysql"
  },
  "production": {
    "use_env_variable": "JAWSDB_URL",
      "dialect": "mysql"
  }
  };
