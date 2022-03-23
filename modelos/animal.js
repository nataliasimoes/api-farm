const Sequelize = require('sequelize');
const database = require('../db.js');

const Animal = database.define('animal', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    localId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'local', 
            key: 'id'
        }},
        tipoAnimal: {
            type: Sequelize.STRING,
            allowNull: false
        },
        sexo: {
            type: Sequelize.STRING,
            allowNull: false
        },
        descricao: Sequelize.STRING 
    },
    {
        tableName: 'animal'
      })
    
    Animal.associate = function(models) {
        //relação 1:N com local
        Animal.belongsTo(models.Local);
    }
    module.exports = Animal;