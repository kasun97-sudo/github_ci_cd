const app = require("./app");
const debug = require("debug")("node-angular");
const http = require("http");
// const https = require("https");
var fs = require("fs");
// var https_options = {
//   //private key
//   key: fs.readFileSync("ssl/esms.dialog.lk.key"),
//   //domain name crt
//   cert: fs.readFileSync("ssl/star_dialog_lk.crt"),

//   ca: [
//     //CA_root
//     fs.readFileSync("ssl/DigiCertCA.crt"),
//     //ca_bundle_certificate.crt
//     fs.readFileSync("ssl/TrustedRoot.crt"),
//   ],
// };
const normalizePort = (val) => {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
};

const onError = (error) => {
  if (error.syscall !== "listen") {
    throw error;
  }
  const bind = typeof addr === "string" ? "pipe " + addr : "port " + port;
  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind + " is already in use");
      process.exit(1);
      break;
    default:
      throw error;
  }
};

const onListening = () => {
  const addr = server.address();
  const bind = typeof addr === "string" ? "pipe " + addr : "port " + port;
  debug("Listening on " + bind);
};

const port = normalizePort(process.env.PORT || "3099");
app.set("port", port);

const server = http.createServer(app);
// const server = https.createServer(https_options, app);
server.on("error", onError);
server.on("listening", onListening);
server.listen(port, () => {
    console.log("Liveness detection Backend Started...");
    console.log("Listening on port 3099...");
  });

