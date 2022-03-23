const Sequelize = require('sequelize');
const database = require('../db.js');

const Local = database.define('local', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    tipoLocal: {
        type: Sequelize.STRING,
        allowNull: false
    },
    descricao: Sequelize.STRING
}, {
    tableName: 'local'
  })

Local.associate = function(models) {
}
module.exports = Local;