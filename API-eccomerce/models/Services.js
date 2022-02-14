const Sequelize = require('sequelize');
const db = require('../database/db')

const Services = db.define('services',{
    id: {
        type:Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey:true,
    },
    service:{
        type: Sequelize.STRING,
        allowNull: false,

    },
    img: {
        type: Sequelize.STRING(2000),
        allowNull: false,
    },
    link: {
        type: Sequelize.STRING(100),
        allowNull: false,
    }
});


module.exports = Services;