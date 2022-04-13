import { Request, Response, NextFunction, Application, Router } from "express";
import authRouter from "@router/auth_router";
import userRouter from "@router/user_router";
import postRouter from "@router/post_router";
const router = Router();

router.get("/", (req: Request, res: Response, next: NextFunction) => {
  try {
    res.send("hello neo's first ts-node-server!");
  } catch (err) {
    next(err);
  }
});

const setRouter = (express: Application): void => {
  // /auth라는 url요청이 들어오면 authRouter로 연결
  express.use("/auth", authRouter);
  express.use("/user", userRouter);
  express.use("/post", postRouter);
};

export default setRouter;
