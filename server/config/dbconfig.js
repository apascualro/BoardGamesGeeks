module.exports = {
  HOST: "us-cdbr-east-02.cleardb.com",
  USER: "bb20409b3c442a",
  PASSWORD: "d3c4ca14",
  DB: "heroku_586131980912611",
  dialect: "mysql",
  //   HOST: "localhost",  
  // USER: "root",
  // PASSWORD: "",
  // DB: "testdb",
  // dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
