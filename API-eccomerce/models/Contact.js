const Sequelize = require('sequelize');
const db = require('../database/db')

const Contact = db.define('contato',{
    id: {
        type:Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey:true,
    },
    Nome:{
        type: Sequelize.STRING(5000),
        allowNull: true,

    },
    Email: {
        type: Sequelize.STRING(2000),
        allowNull: false,
    },
    Message: {
        type: Sequelize.STRING(2000),
        allowNull: false,
    
    }
});

Contact.sync({alter:true})

module.exports = Contact;