const Sequelize = require("sequelize");
const sequelize = require("../../sequalize-connection");

const Company = sequelize.define(
    "Company",
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        companyName : {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "company name can't be null",
                },
            },
        },
        businessName : {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "business name can't be null",
                },
            },
        },
        companyContact : {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "company contact can't be null",
                },
            },
        },
        companyLocation : {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "company location can't be null",
                },
            },
        },
        industryType : {
            type: Sequelize.INTEGER,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "idustry type can't be null",
                },
            },
        },
        NID : {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "NID can't be null",
                },
            },
        },
        VAT : {
            type: Sequelize.DOUBLE,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "vat can't be null",
                },
            },
        },
        companyImage : {
            type: Sequelize.STRING,
        },
        status : { // 0 inactive , 1 active
            type: Sequelize.INTEGER,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "status can't be null",
                },
            },
        },
    },
    {
        timestamps: true,
        freezeTableName: true,
        tableName: "companies",
    }
);

module.exports = Company;