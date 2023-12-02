import { Router } from "express";
import AuthController from "../controllers/AuthController";

const router: Router = Router();
const authController: AuthController = new AuthController();

router.post("/signin", authController.signIn);

export default router;
