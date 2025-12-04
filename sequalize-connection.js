const Sequelize = require("sequelize");
config=require("./ignore-constants/ignore-config");

const sequelize = new Sequelize(config.dbName, config.dbUsername,config.dbPassword, {
  host: config.dbHost,
  port: config.dbPort,
  dialect: "mysql",
  dialectOptions: {
    connectTimeout: 30000   
  },
  pool: {
    max: 50,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});


sequelize
  .authenticate()
  .then(() => {
    console.log(process.env.DB_USER);
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

module.exports = sequelize;

