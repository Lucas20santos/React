const Sequelize = require('sequelize')
const sequelize = new Sequelize('postgres://postgres@localhost:5432/banco_teste', {dialect: 'postgres'});

module.exports = sequelize;
