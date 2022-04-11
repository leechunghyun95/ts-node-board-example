"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const database_1 = require("@config/database");
const user_1 = require("@model/user");
const env = process.env.NODE_ENV || "dev";
const { host, database, username, password } = database_1.default[env];
console.log("env:", env);
console.log("host:", host);
console.log("username:", username);
const sequelize = new sequelize_typescript_1.Sequelize({
    host: host,
    database: database,
    dialectOptions: { decimalNumbers: true },
    username: username,
    password: password,
    repositoryMode: true,
    models: ["../model/*.ts"],
    dialect: "mysql",
    sync: {
        force: false,
    },
    define: {
        timestamps: true,
        underscored: true,
        paranoid: true,
        collate: "utf8_general_ci",
        charset: "utf8",
    },
    port: 3306,
    ssl: true,
});
exports.sequelize = sequelize;
sequelize.addModels([user_1.default]);
exports.default = sequelize;
//# sourceMappingURL=index.js.map