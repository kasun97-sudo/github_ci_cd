const Sequelize = require("sequelize");
const sequelize = require("../../sequalize-connection");

const User = sequelize.define(
    "User",
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        userName : {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "user name can't be null",
                },
            },
        },
        password : {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "password can't be null",
                },
            },
        },
        email : {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "email can't be null",
                },
            },
        },
        representativeName : {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "representative name can't be null",
                },
            },
        },
        mobile : {
            type: Sequelize.STRING,
        },
        accountType : {
            type: Sequelize.INTEGER,
        },
        companyId : {
            type: Sequelize.INTEGER,
            references : {
                model : "companies",
                key : "id"
            }
        },
        creatorId : {
            type: Sequelize.INTEGER,
        },
        creatorRole : {
            type: Sequelize.INTEGER,
        },
        rateCardId : {
            type: Sequelize.INTEGER,
        },
        isVerified : {
            type: Sequelize.INTEGER,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "is verified can't be null",
                },
            },
        },
        isApproved : {
            type: Sequelize.INTEGER,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "is approved can't be null",
                },
            },
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
        tableName: "users",
    }
);

module.exports = User;