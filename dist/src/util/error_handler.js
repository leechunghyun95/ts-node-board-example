"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errorHandler = (res, error) => {
    return res.status(error.status).json({ message: error.message });
};
exports.default = errorHandler;
//# sourceMappingURL=error_handler.js.map