const winston = require("winston");
require("winston-daily-rotate-file");
var momentT = require("moment-timezone");
const moment = require("moment");
let curretSlDate = momentT.tz("Asia/kolkata").format("YYYY-MM-DD-HH-mm");

var transport = new winston.transports.DailyRotateFile({
  datePattern: "YYYY-MM-DD",
  // filename: "/data/esms/logs/ui_user_logs/" + "error.log",
  filename:
    "D:/Live_Sites/ESMS/Dev/dev-esms-backend/uploads/temp_logs/" + "error.log",
  zippedArchive: true,
});

transport.on("rotate", function (oldFilename, newFilename) {
  // do something fun
});
const logger = winston.createLogger({
  level: "info",
  format: winston.format.json(),
  defaultMeta: { service: "esms" },
  transports: [transport],
});

//
// If we're not in production then log to the `console` with the format:
// `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
//
if (process.env.NODE_ENV !== "production") {
  logger.add(
    new winston.transports.Console({
      format: winston.format.simple(),
    })
  );
}
module.exports = logger;
