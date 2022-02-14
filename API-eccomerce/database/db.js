const Sequelize = require('sequelize');

const db = new Sequelize('mk', 'root', '123456',{
    host: 'localhost',
    dialect: 'mysql'
});

db.authenticate().then(function(){
    console.log('connected db')
}).catch(function(){
    console.log('error: database no connected')
});

module.exports = db;