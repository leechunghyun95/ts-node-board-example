"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const typedi_1 = require("typedi");
const user_1 = require("@model/user");
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
let AuthService = class AuthService {
    async join(joinForm) {
        console.log("join들어왔다.");
        const user = await user_1.default.create({
            email: joinForm.email,
            name: joinForm.name,
            password: joinForm.password,
        });
        return user.idx;
    }
};
AuthService = __decorate([
    (0, typedi_1.Service)()
], AuthService);
exports.default = AuthService;
//# sourceMappingURL=auth_service.js.map