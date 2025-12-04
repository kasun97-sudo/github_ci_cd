const { validationResult } = require("express-validator");

const custom_error = {
  status: "failed",
  comment: "error occurred",
  data: null,
  errCode: 100,
};
const custom_success = {
  status: "success",
  comment: "success",
  data: null,
  errCode: null,
};
const validate_request = (req, res, next) => {
  let TRA_ID = "";
  if (req.body.transaction_id) {
    TRA_ID = req.body.transaction_id;
  }
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    let dataL = errors.array().map((item) => item.msg);
    custom_error.comment = dataL.join(" and ");
    custom_error.errCode = "107";
    custom_error.transaction_id = TRA_ID;
    return res.status(400).json(custom_error);
  }
  next();
};
module.exports = {
    validate_request,
    custom_error,
    custom_success,
    secret:
      "exlXreKGYkr3LbcbRGk94RFVrdr6mbpU6+u1oHnTHEnWOanzQU5yyqG9nY1WqQVnpU8BsRRLmo3XTho5BuiPHubyU/OcWFrbMTdOG6I6hM/ef7BlkxiNg6nPhj3QKHvgSSfabtc65A+5XyPSu+fG7g==-$2y$10$F2uA6jHKSkLBc/S1k2BOueXtm./LuJVfFzO6PdL8Kklt6o8EcGclm-$2y$10$UAqUGnByfbe/h0bx7TnWAOKpqpORAUSUApjdmbWX6LnEl3rVYncoW",
    refreshTokenSecret:
      "$2y$10$F2uA6jHKSkLBc/S1k2BOueXtm./LuJVfFzO6PdL8Kklt6o8EcGclm-exlXreKGYkr3LbcbRGk94RFVrdr6mbpU6+u1oHnTHEnWOanzQU5yyqG9nY1WqQVnpU8BsRRLmo3XTho5BuiPHhj63wxYiHHN3bLEm2x3QRZdidH2/MaP5gqKu5CQ8+1v9xNCM2GA6bi7jjINgsX9ow0q4HOrw+l46LmPv1/Xye4g7XmE21qxjy3SQ79muXAd",
      tokenLife: 43200,
      tokenLifeInHour: "12h",
      refreshTokenLife: 604800,
      refreshTokenLifeInHour: "1d",
  };
  