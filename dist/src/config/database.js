"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = require("dotenv");
const path = require("path");
console.log(1);
const env = process.env.NODE_ENV || "prod";
console.log(2);
console.log("env", env);
dotenv.config({
    path: path.join("env/" + env + ".env"),
});
console.log("process.env", process.env);
const config = {
    dev: {
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        host: process.env.DB_HOST,
        dialect: "mysql",
    },
    local: {
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        host: process.env.DB_HOST,
        dialect: "mysql",
    },
    prod: {
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        host: process.env.DB_HOST,
        dialect: "mysql",
    },
};
exports.default = config;
//# sourceMappingURL=database.js.map