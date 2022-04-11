"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
const authValidator = {
    join: [
        (0, express_validator_1.check)("email")
            .notEmpty()
            .withMessage("이메일은 필수입니다.")
            .isEmail()
            .withMessage("이메일 형식이 아닙니다."),
        (0, express_validator_1.check)("name").notEmpty().withMessage("닉네임은 필수입니다."),
        (0, express_validator_1.check)("password").notEmpty().withMessage("비밀번호는 필수입니다."),
    ],
    login: [
        (0, express_validator_1.check)("email").notEmpty().withMessage("이메일은 필수입니다."),
        (0, express_validator_1.check)("password").notEmpty().withMessage("비밀번호는 필수입니다."),
    ],
};
exports.default = authValidator;
//# sourceMappingURL=auth.js.map