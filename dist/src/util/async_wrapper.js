"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function wrapAsync(fn) {
    return function (req, res, next) {
        fn(req, res, next).catch(next);
    };
}
exports.default = wrapAsync;
//# sourceMappingURL=async_wrapper.js.map