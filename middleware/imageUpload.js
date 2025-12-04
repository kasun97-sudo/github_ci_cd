require("dotenv").config();
const config = require("../config/config");
const fs = require('fs');
const path = require('path');
const isEmpty = require("is-empty");

exports.imageUpload = async (req , res , next) => {
    const customError = Object.assign({}, config.custom_error);
    try{
        // if image empty forward the process
        if(isEmpty(req.body.image)){
            req.body.imageName = "";
            next();
        }else {
            // Extract file type and base64 data
            const regex = /^data:.+\/(.+);base64,(.*)$/;
            const matches = req.body.image.match(regex);
            const fileType = matches[1];
            const base64Data = matches[2];


            // Create buffer from base64 data
            const buffer = Buffer.from(base64Data, 'base64');

            // if product name is not empty then image upload to product folder
            if(!isEmpty(req.body.productName)){
                 // Write buffer to file
                const imageName = Date.now() + '.' + fileType;
                fs.writeFile(path.join(__dirname, '../images/products/' + imageName), buffer, (err) => {
                    if (err) {
                        statusCode = 400;
                        customError.comment = "error occurs while image upload!!";
                        throw new Error();
                    }
                    req.body.imageName = imageName;
                    next();
                });
            }else if(!isEmpty(req.body.invoiceNumber)){
                 // Write buffer to file
                const imageName = Date.now() + '.' + fileType;
                fs.writeFile(path.join(__dirname, '../images/vendorTransactionInvoices/' + imageName), buffer, (err) => {
                    if (err) {
                        statusCode = 400;
                        customError.comment = "error occurs while image upload!!";
                        throw new Error();
                    }
                    req.body.imageName = imageName;
                    next();
                });
            }

            
        }
    }catch(error){
        customError.comment = 'Error!!';
        return res.status(500).json(customError);
    }
}