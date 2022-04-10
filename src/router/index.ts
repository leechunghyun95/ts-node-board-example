import { Request, Response, NextFunction, Application, Router } from "express";
const router = Router();

router.get("/", (req: Request, res: Response, next: NextFunction) => {
  try {
    res.send("hello neo's first ts-node-server!");
  } catch (err) {
    next(err);
  }
});

const setRouter = (express: Application): void => {};

export default setRouter;
