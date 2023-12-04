import { Request, Response } from "express";
import AuthService from "../services/AuthService";
import ErrorResponse from "../models/responses/errorResponse";
import SuccessResponse from "../models/responses/successResponse";
import BadRequestException from "../errors/BadRequestException";

export default class AuthController {
  private authService: AuthService;

  constructor() {
    this.authService = new AuthService();
  }

  signIn = (req: Request, res: Response) => {
    const { username, password } = req.body;

    try {
      if (!username || !password)
        throw new BadRequestException("Username and password can not be null");

      const response: boolean = this.authService.singIn(username, password);
      if (!response)
        throw new BadRequestException("Username or passowrd is incorrect");
      return res.status(200).json(new SuccessResponse({ message: "Signed" }));
    } catch (error: any) {
      if (error instanceof Error) {
        return res.status(500).json(new ErrorResponse(error.message, req.path));
      }
      return res
        .status(error.getStatus())
        .json(new ErrorResponse(error.message, req.path));
    }
  };
}
