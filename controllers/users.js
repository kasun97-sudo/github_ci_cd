require('dotenv').config();
const config = require("../config/config");
// const sequelize = require('../sequalize-connection');
const isEmpty = require('is-empty');


exports.getAll = async (req, res) => {
    const customError = Object.assign({}, config.custom_error);
    const customSuccess = Object.assign({}, config.custom_success);
    let transaction = null;

    const date = new Date(new Date().getTime());
    const dateString = date.toISOString();
    let reference = date.getTime() + "_";
    try{
        let users = [
            {
                user_id: 1,
                user_name: "kasun"
            }
        ];
        customSuccess.data  users;
        return res.status(customSuccess.sucCode).json(customSuccess);
    }catch(error){
        console.log(error);
        // if (!isEmpty(transaction)) {
        //     await transaction.rollback();
        // }
        // if (error.name === 'SequelizeUniqueConstraintError') {
        //     const validationErrors = error.errors.map((validationError) => validationError.message);
        //     customError.comment = validationErrors.join(' & ');
        // }
        return res.status(customError.errCode).json(customError);
    }
}
