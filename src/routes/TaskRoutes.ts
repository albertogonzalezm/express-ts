import { Router } from "express";
import TaskController from "../controllers/TaskController";

const router: Router = Router();
const taskController: TaskController = new TaskController();

router.get("/task/:id", taskController.findById);
router.get("/tasks", taskController.findAll);

export default router;
