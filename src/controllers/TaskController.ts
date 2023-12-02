import { Request, Response } from "express";
import TaskService from "../services/TaskService";
import HandlerException from "../errors/HandlerException";
import ErrorResponse from "../models/responses/errorResponse";
import SuccessResponse from "../models/responses/successResponse";

export default class TaskController {
  private taskService: TaskService;

  constructor() {
    this.taskService = new TaskService();
  }

  findById = (req: Request, res: Response) => {
    try {
      const task = this.taskService.findById(+req.params["id"]);

      if (!task) {
        throw new HandlerException({
          resource_name: "task",
          field_name: "id",
          field_value: req.params.id,
          status_code: 404,
        });
      }

      return res.status(200).json(new SuccessResponse({ resource: task }));
    } catch (error: any) {
      if (error instanceof HandlerException) {
        return res
          .status(error.getStatus())
          .json(new ErrorResponse(error.message, req.path));
      }
      return res.status(500).json(new ErrorResponse(error.message, req.path));
    }
  };

  findAll = (req: Request, res: Response) => {
    try {
      const tasks = this.taskService.findAll();

      if (!tasks || tasks.length === 0) {
        throw new HandlerException({
          resource_name: "tasks",
          status_code: 404,
        });
      }

      return res.status(200).json(new SuccessResponse({ resource: tasks }));
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
