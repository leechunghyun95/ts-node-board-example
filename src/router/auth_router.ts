import * as express from "express";
import { Request, Response } from "express";
import validate from "@validate/index";
import authValidator from "@validate/auth";
import asyncWrapper from "@util/async_wrapper";
import { LoginDto, UserJoinForm, UserSummary } from "@payload/user";
import AuthService from "@service/auth_service";
import HttpStatus from "@constant/http_status";
import { Container } from "typedi";

const router = express.Router();
const authService = Container.get(AuthService);

// 회원가입
// post 메서드의 /join이라는 요청이 들어오면 회원가입로직
// 1. validate을 통해 유효성 검사
// 2. authService를 통해 비즈니스로직 실행
router.post(
  "/join",
  validate(authValidator["join"]),
  // 서비스 로직을 asyncWrapper로 감싸서 모든에러가 asyncWrapper에서 감지되어~ 그다음은 아직 모름ㅋ
  asyncWrapper(async (req: Request, res: Response) => {
    const joinForm = req.body as UserJoinForm;
    console.log("req.body", req.body);

    const userId = await authService.join(joinForm);

    res.setHeader("Location", `${req.get("host")}/user/${userId}`);
    res.status(HttpStatus.CREATED).send();
  })
);

// 로그인
// /auth/login으로 접근시
// 1. 로그인 유효성 검사
// 2. authService에서 login메서드 가져오기

export default router;
