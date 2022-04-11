"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const index_1 = require("@validate/index");
const auth_1 = require("@validate/auth");
const async_wrapper_1 = require("@util/async_wrapper");
const auth_service_1 = require("@service/auth_service");
const http_status_1 = require("@constant/http_status");
const typedi_1 = require("typedi");
const router = express.Router();
const authService = typedi_1.Container.get(auth_service_1.default);
// 회원가입
// post 메서드의 /join이라는 요청이 들어오면 회원가입로직
// 1. validate을 통해 유효성 검사
// 2. authService를 통해 비즈니스로직 실행
router.post("/join", (0, index_1.default)(auth_1.default["join"]), 
// 서비스 로직을 asyncWrapper로 감싸서 모든에러가 asyncWrapper에서 감지되어~ 그다음은 아직 모름ㅋ
(0, async_wrapper_1.default)(async (req, res) => {
    const joinForm = req.body;
    console.log("req.body", req.body);
    const userId = await authService.join(joinForm);
    res.setHeader("Location", `${req.get("host")}/user/${userId}`);
    res.status(http_status_1.default.CREATED).send();
}));
// 로그인
// /auth/login으로 접근시
// 1. 로그인 유효성 검사
// 2. authService에서 login메서드 가져오기
exports.default = router;
//# sourceMappingURL=auth_router.js.map