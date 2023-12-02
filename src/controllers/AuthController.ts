import { Request, Response } from "express";
import AuthService from "../services/AuthService";
import HandlerException from "../errors/HandlerException";
import ErrorResponse from "../models/responses/errorResponse";
import SuccessResponse from "../models/responses/successResponse";

export default class AuthController {
  private authService: AuthService;

  constructor() {
    this.authService = new AuthService();
  }

  signIn = (req: Request, res: Response) => {
    const { username, password } = req.body;

    try {
      if (!username || !password)
        throw new HandlerException({
          message: "Username or password can not be null",
          status_code: 400,
        });

      const response: boolean = this.authService.singIn(username, password);
      if (!response)
        throw new HandlerException({
          message: "Username or password is incorrect",
          status_code: 400,
        });

      return res.status(200).json(new SuccessResponse({ message: "Signed" }));
    } catch (error: any) {
      if (error instanceof HandlerException) {
        return res
          .status(error.getStatus())
          .json(new ErrorResponse(error.message, req.path));
      }
      return res.status(500).json(new ErrorResponse(error.message, req.path));
    }
  };
}
