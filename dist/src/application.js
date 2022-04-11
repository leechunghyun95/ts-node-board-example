"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("source-map-support/register");
const express = require("express");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const cors = require("cors");
const hpp = require("hpp");
const helmet = require("helmet");
const dotenv = require("dotenv");
const index_1 = require("@model/index");
require("reflect-metadata");
const router_1 = require("./router");
const winston_1 = require("@config/winston");
const path = require("path");
const error_handler_1 = require("@util/error_handler");
class Application {
    constructor() {
        this.prod = process.env.NODE_ENV === "prod";
        const envPath = "env/" + process.env.NODE_ENV + ".env";
        dotenv.config({
            path: path.join(envPath),
        });
        console.log(`load ${envPath}`);
        this.application = express();
        this.application.set("port", this.prod ? process.env.PORT : 3001);
    }
    setSequelize() {
        index_1.sequelize
            .sync()
            .then(() => {
            winston_1.default.info("database connection,");
        })
            .catch((err) => {
            console.log(err);
        });
    }
    setMiddleware() {
        if (this.prod) {
            this.application.use(hpp());
            this.application.use(helmet());
            this.application.use(morgan("combined"));
        }
        this.application.use(cors({}));
        this.application.use("/", express.static("uploads"));
        this.application.use(morgan("dev"));
        this.application.use(express.json());
        this.application.use(express.urlencoded({ extended: false }));
        this.application.use(cookieParser(process.env.COOKIE_SECRET));
    }
    setRouter() {
        (0, router_1.default)(this.application);
        this.application.use((err, req, res, next) => {
            console.log(err);
            return (0, error_handler_1.default)(res, err);
        });
    }
    start() {
        this.application.listen(this.application.get("port"), () => {
            winston_1.default.info(`server start. port: ${this.application.get("port")}`);
        });
    }
}
exports.default = Application;
//# sourceMappingURL=application.js.map