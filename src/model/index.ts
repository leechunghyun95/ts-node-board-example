import { Sequelize } from "sequelize-typescript";
import config from "@config/database";
import User from "@model/user";

const env = (process.env.NODE_ENV as "prod" | "local" | "dev") || "dev";

const { host, database, username, password } = config[env];

console.log("env:", env);
console.log("host:", host);
console.log("username:", username);

const sequelize = new Sequelize({
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

sequelize.addModels([User]);

export { sequelize };
export default sequelize;
