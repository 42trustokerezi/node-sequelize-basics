require('dotenv').config();
const {DB_HOST, DB_USERNAME} = process.env;

module.exports = {
  "development": {
    "username": DB_USERNAME,
    "password": null,
    "database": "sequelize_database_dev",
    "host": DB_HOST,
    "dialect": "postgres"
  },
  "test": {
    "username": DB_USERNAME,
    "password": null,
    "database": "sequelize_database_test",
    "host": DB_HOST,
    "dialect": "postgres"
  },
  "production": {
    "username": DB_USERNAME,
    "password": null,
    "database": "sequelize_database_prod",
    "host": DB_HOST,
    "dialect": "postgres"
  }
}
