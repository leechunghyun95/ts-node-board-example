import * as bcrypt from "bcryptjs";
import * as jwt from "jsonwebtoken";
import { Service } from "typedi";

import User from "@model/user";
// import BadRequestError from "@error/bad_request_error";
// import ConflictError from "@error/confict_error";
import { UserJoinForm } from "@payload/user";
import { LoginDto, UserSummary } from "@payload/user";

@Service()
export default class AuthService {
  // 회원가입
  async join(joinForm: UserJoinForm): Promise<number> {
    console.log("join들어왔다.");
    const user = await User.create({
      email: joinForm.email,
      name: joinForm.name,
      password: joinForm.password,
    });

    return user.idx;
  }

  // 로그인
  async login(loginDto: LoginDto): Promise<UserSummary> {
    const user = await User.findOne({
      where: { email: loginDto.email },
    });

    // db에 이메일 없을때
    if (!user) {
    }

    // pw 일치하지 않을때
    const isEqual = bcrypt.compareSync(loginDto.password, user.password);
    if (!isEqual) {
    }

    const userInfo = {
      idx: user.idx,
      email: user.email,
      name: user.name,
    };

    return userInfo as UserSummary;
  }
}
