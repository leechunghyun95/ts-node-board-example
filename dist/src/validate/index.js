"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validate = void 0;
const express_validator_1 = require("express-validator");
const validate = (validations) => {
    console.log("validate");
    console.log(`validations`, validations);
    return async (req, res, next) => {
        // 모든 프로미스가 이행한후 promise 반환
        await Promise.all(
        // validations 배열에 들어있는 객체들을 하나씩 돌면서 req에 대해 run함
        validations.map((validation) => validation.run(req)));
        const errors = (0, express_validator_1.validationResult)(req);
        if (errors.isEmpty()) {
            return next();
        }
        return res.status(422).json({ errors: errors.array() });
    };
};
exports.validate = validate;
exports.default = exports.validate;
//# sourceMappingURL=index.js.map