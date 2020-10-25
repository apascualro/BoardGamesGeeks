const dbConfig = require("../config/dbconfig");

/*=============================================
CONECTAMOS A MYSQL DATABASE
=============================================*/
const Sequelize = require('sequelize')
const Op = Sequelize.Op;
const sequelize = new Sequelize(
  dbConfig.DB, 
  dbConfig.USER, 
  dbConfig.PASSWORD,
  {
    host: dbConfig.HOST,
    dialect: 'mysql',
    logging: false,
    freezeTableName: true,
    operatorsAliases: {
      $and: Op.and,
      $or: Op.or,
      $eq: Op.eq,
      $gt: Op.gt,
      $lt: Op.lt,
      $lte: Op.lte,
      $like: Op.like
    }
})

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.juegos = require("./juego.model.js")(sequelize, Sequelize);

module.exports = db;
