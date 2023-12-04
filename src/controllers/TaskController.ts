import { Request, Response } from "express";
import TaskService from "../services/TaskService";
import ErrorResponse from "../models/responses/errorResponse";
import SuccessResponse from "../models/responses/successResponse";
import NotFoundException from "../errors/NotFoundException";

export default class TaskController {
  private taskService: TaskService;

  constructor() {
    this.taskService = new TaskService();
  }

  findById = (req: Request, res: Response) => {
    try {
      const task = this.taskService.findById(+req.params["id"]);

      if (!task) throw new NotFoundException("task", "id", req.params.id);

      return res.status(200).json(new SuccessResponse({ resource: task }));
    } catch (error: any) {
      if (error instanceof Error) {
        return res.status(500).json(new ErrorResponse(error.message, req.path));
      }
      return res
        .status(error.getStatus())
        .json(new ErrorResponse(error.message, req.path));
    }
  };

  findAll = (req: Request, res: Response) => {
    try {
      const tasks = this.taskService.findAll();

      if (!tasks || tasks.length === 0) throw new NotFoundException("tasks");

      return res.status(200).json(new SuccessResponse({ resource: tasks }));
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
