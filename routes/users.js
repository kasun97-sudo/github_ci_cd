const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const Controller = require("../controllers/users");

// body validate middleware
const { validate_request } = require('../middleware/validateRequestBody');


router.post(
    "/get_all",
    [

        body('searchTerm')
            .isLength({ max: 50 }).withMessage('search term must be under 50 characters'),
    ],
    validate_request,
    Controller.getAll
);

module.exports = router;