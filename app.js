const express = require("express");
const bodyParse = require("body-parser");
var cors = require('cors')
const app = express();
const mongoose = require("mongoose");

//msisdn
const msisdn = require("express-msisdn");

const path = require("path");

app.use(cors());
app.use(bodyParse.json({ limit: "10mb" }));
app.use(bodyParse.urlencoded({ extended: false, limit: "10mb" }));
app.use(msisdn());
// app.use(
//   "/api/images",
//   express.static(path.join("uploads/images/register/nic_or_brc"))
// );
// app.use("/api/sample-files", express.static(path.join("uploads/sample_files")));
// app.use("/api/numberfiles", express.static(path.join("uploads/numberfiles")));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization,RefreshToken,RegisterToken,VerifyMobileToken,ChangePasswordToken,AddNewPasswordtoken,AddVerifyNewPasswordtoken,AdminAuthorization,GetTwoStepAuthToken"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});

// const userRoutes = require("./routes/admin/user");

//user routes
app.use("/api/v1/user", require("./routes/users"));


app.use((err, req, res, next) => {
  // This check makes sure this is a JSON parsing issue, but it might be
  // coming from any middleware, not just body-parser:

  if (err instanceof SyntaxError && err.status === 400 && "body" in err) {
    //console.error(err);
    return res.status(401).json({
      status: "failed",
      comment: "Bad Request",
    }); // Bad request
  }

  next();
});
module.exports = app;
