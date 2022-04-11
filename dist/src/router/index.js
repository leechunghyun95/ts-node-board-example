"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_router_1 = require("@router/auth_router");
const router = (0, express_1.Router)();
router.get("/", (req, res, next) => {
    try {
        res.send("hello neo's first ts-node-server!");
    }
    catch (err) {
        next(err);
    }
});
const setRouter = (express) => {
    // /auth라는 url요청이 들어오면 authRouter로 연결
    express.use("/auth", auth_router_1.default);
};
exports.default = setRouter;
//# sourceMappingURL=index.js.map