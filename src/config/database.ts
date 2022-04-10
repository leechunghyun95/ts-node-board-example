import * as dotenv from "dotenv";
import path = require("path");

console.log(1);

const env = process.env.NODE_ENV || "prod";

console.log(2);
console.log("env", env);
dotenv.config({
  path: path.join("env/" + env + ".env"),
});

console.log("process.env", process.env);

type Database = {
  username: string;
  password: string;
  database: string;
  host: string;
  dialect: string;
  [key: string]: string;
};

interface IConfigGroup {
  dev: Database;
  local: Database;
  prod: Database;
}

const config: IConfigGroup = {
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

export default config;
