import { NextFunction, Request, Response } from "express";
import jwt from "../utils/jwt";

const AuthMiddleware = (req: Request, res: Response, next: NextFunction) => {
  try {
    if (!req.headers.authorization) {
      return res.status(401).send({ err: "Token not found", success: false });
    }
    console.log(req.headers.authorization);
    
    const [bearer, token] = req.headers.authorization.split(" ");
    if (bearer !== "Bearer" || !token) {
      return res.status(401).send({ err: "Token malformated", success: false });
    }

    const decode = jwt.verify(token);
    if (!decode) {
      return res.status(401).send({ err: "Invalid token", success: false });
    }

    next();
  } catch (err: any) {
    return res.send({ err: err.message, success: false });
  }
};

export default AuthMiddleware;
