import "reflect-metadata";
import { Service } from "typedi";
import { UserUpdateForm } from "../payload/user";
import User from "../model/user";
import * as bcrypt from "bcryptjs";

@Service()
export default class UserService {
  // 이름 변경
  // UserUpdateFrom 인자로 받기
  async updateName(userUpdateForm: UserUpdateForm): Promise<number> {
    // 인자로 받은 userUpdateForm 이용해서 name 수정
    // 이메일 비밀번호 맞나 검사
    console.log("user_service", 1);
    console.log("email", userUpdateForm.email);
    const user = await User.findOne({
      where: { email: userUpdateForm.email },
    });
    console.log("user_service", 2);

    console.log("user", user);

    if (!user) {
      console.log("없는 유저");
      return 404;
    }
    console.log("user_service", 3);

    // 비밀번호 맞나 검사
    const isEqual = bcrypt.compareSync(userUpdateForm.password, user.password);
    console.log("user_service", 4);

    // 비밀번호 틀리면
    if (!isEqual) {
      console.log("비번 틀림");
      return 401;
    }
    console.log("user_service", 5);

    // name 수정
    User.update(
      { name: userUpdateForm.name },
      {
        where: {
          email: userUpdateForm.email,
        },
      }
    );

    console.log("user_service", 6);

    return 200;
  }
  // 이메일 변경
  // 비밀번호 변경
  // 회원탈퇴
  async signOut(email: string, password: string): Promise<number> {
    console.log("signOut", email);
    const count = await User.destroy({ where: { email: "test2@gmail.com" } });
    console.log("count", count);
    return count;
  }
}
