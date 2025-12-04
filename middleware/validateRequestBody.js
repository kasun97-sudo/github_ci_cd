const { validationResult } = require("express-validator");
const config=require("../config/config");

const customError = Object.assign({}, config.custom_error);

exports.validate_request = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    let errorComment = '';
    errorComment = errors.array().map(e => e.msg).join(' & ');
    customError.comment = errorComment;
    return res.status(400).json(customError);
  }
  next();
};