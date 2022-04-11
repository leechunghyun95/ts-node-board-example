import { Request, Response, NextFunction } from "express";
import { ValidationChain, validationResult } from "express-validator";

export const validate = (validations: ValidationChain[]) => {
  console.log("validate");
  console.log(`validations`, validations);
  return async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void | Response> => {
    // 모든 프로미스가 이행한후 promise 반환
    await Promise.all(
      // validations 배열에 들어있는 객체들을 하나씩 돌면서 req에 대해 run함
      validations.map((validation: ValidationChain) => validation.run(req))
    );
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      return next();
    }
    return res.status(422).json({ errors: errors.array() });
  };
};

export default validate;
