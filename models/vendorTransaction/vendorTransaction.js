const Sequelize = require("sequelize");
const sequelize = require("../../sequalize-connection");

const VendorTransaction = sequelize.define(
    "VendorTransaction",
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        invoiceNumber : {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "invoice number can't be null",
                }
            },
        },
        invoiceImage : {
            type: Sequelize.STRING,
        },
        dateToSettle : {
            type: Sequelize.DATEONLY
        },
        // broughtPrice : {
        //     type: Sequelize.DOUBLE,
        //     allowNull: false,
        //     validate: {
        //         notNull: {
        //             msg: "brought price can't be null",
        //         }
        //     }, 
        // },
        modeOfPayment : {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "brought price can't be null",
                }
            },
        },
        transactionStatus : {
            type: Sequelize.INTEGER,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "transaction status can't be null",
                }
            },
        },
        transactionType : {
            type: Sequelize.INTEGER,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "transaction type can't be null",
                }
            },
        },
        vendorId : {
            type: Sequelize.INTEGER,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "vendor id can't be null",
                }
            },
            references : {
                model : "vendors",
                key : "id"
            }
        },
        branchId : {
            type : Sequelize.INTEGER,
            allowNull : false,
            validate : {
                notNull: {
                    msg: "branch id can't be null",
                },
            }
        },
        shopId : {
            type : Sequelize.INTEGER,
            allowNull : false,
            validate : {
                notNull: {
                    msg: "shop id can't be null",
                },
            }
        }
    }
    ,
    {
        timestamps: false,
        freezeTableName: true,
        tableName: "vendortransactions",
    }
);

module.exports = VendorTransaction;