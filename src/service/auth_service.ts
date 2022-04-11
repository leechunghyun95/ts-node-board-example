import * as bcrypt from "bcryptjs";
import * as jwt from "jsonwebtoken";
import { Service } from "typedi";
import { Repository } from "sequelize-typescript";

import sequelize from "@model/index";
import User from "@model/user";
// import BadRequestError from "@error/bad_request_error";
// import ConflictError from "@error/confict_error";
import { UserJoinForm } from "@payload/user";
import { LoginDto } from "@payload/user";
import { and } from "sequelize/types";

// @Service()
// export default class AuthService {
//   constructor(private userRepository: Repository<User>) {
//     this.userRepository = sequelize.getRepository(User);
//   }

//   async join(joinForm: UserJoinForm): Promise<number> {
//     try {
//       console.log(`auth_service: joinForm`, joinForm);
//       const hashedPassword: string = bcrypt.hashSync(joinForm.password, 8);
//       console.log(`auth_service: hashedPassword`, hashedPassword);

//       console.log(`auth_service: joinForm.email`, joinForm.email);
//       console.log(`auth_service: joinForm.name`, joinForm.name);

//       // const user = new User({
//       //   email: joinForm.email,
//       //   password: hashedPassword,
//       //   name: joinForm.name,
//       // });

//       // console.log(`user`, user);
//       // await user.save();

//       console.log("auth_service", "before_user");
//       const user = await this.userRepository.create({
//         email: joinForm.email,
//         password: hashedPassword,
//         name: joinForm.name,
//       });

//       console.log("auth_service: user", user);

//       return user.idx;
//     } catch (err) {
//       // throw new ConflictError("이미 존재하는 이메일 입니다.");
//     }
//   }

//   async login(loginDto: LoginDto) {
//     console.log("loginDto.email", loginDto.email);
//     console.log("loginDto.password", loginDto.password);

//     const user = await this.userRepository.findOne({
//       where: { email: loginDto.email },
//     });

//     if (!user) {
//       return "없는 이메일입니다.";
//     }

//     console.log("login: user", user);

//     const isEqual = bcrypt.compareSync(loginDto.password, user.password);

//     if (!isEqual) {
//     }

//     const userInfo = {
//       email: user.email,
//       name: user.name,
//     };
//     return userInfo;
//   }
// }

@Service()
export default class AuthService {
  async join(joinForm: UserJoinForm): Promise<number> {
    console.log("join들어왔다.");
    const user = await User.create({
      email: joinForm.email,
      name: joinForm.name,
      password: joinForm.password,
    });

    return user.idx;
  }
}
