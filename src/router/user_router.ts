import * as express from "express";
import { Request, Response } from "express";
import asyncWrapper from "../util/async_wrapper";
import { UserUpdateForm } from "../payload/user";
import UserService from "../service/user_service";

import { Container } from "typedi";
import { ResultWithContext } from "express-validator/src/chain";
import HttpStatus from "@constant/http_status";

const router = express.Router();
const userService = Container.get(UserService);

// user_service 의존성 주입

// 유저 정보 수정(닉네임변경)
// put localhost/user/name 요청 처리
router.put(
  "/name",
  asyncWrapper(async (req: Request, res: Response) => {
    // UserUpdateForm 으로 받은 데이터 만들기
    // user_service로직 가져와서 UerUpdateForm 인지로 가지고 실행
    console.log("user_router", 1);
    const userUpdateForm = req.body as UserUpdateForm;
    console.log("user_router", 2);
    let result = Object();
    console.log("user_router", 3);
    result = await userService.updateName(userUpdateForm);
    console.log("user_router", 4);
    res.send(result);
    console.log("user_router", 5);
  })
);

router.delete(
  "/",
  asyncWrapper(async (req: Request, res: Response) => {
    console.log("user_router", 1);
    const email = req.body.email;
    const password = req.body.password;
    console.log(`emal`, email);

    await userService.signOut(email, password);
    res.status(HttpStatus.OK);
    res.send(`${email} 삭제됨`);
  })
);

export default router;
