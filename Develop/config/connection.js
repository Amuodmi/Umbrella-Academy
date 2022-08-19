require('dotenv').config();

const Sequelize = require('sequelize');

//creates connection to db //
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize("ecommerce_db", "root", "Supergeil!016", {
      host: 'localhost',
      dialect: 'mysql',
      dialectOptions: {
        decimalNumbers: true,
      },
    });

module.exports = sequelize;
