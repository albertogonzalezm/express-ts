import express, { Express, Request, Response } from "express";
import authRouter from "./routes/AuthRoutes";
import taskRouter from "./routes/TaskRoutes";

const app: Express = express();

app.use(express.json());

app.use(authRouter);
app.use(taskRouter);

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({ message: "Home" });
});

app.listen(3000, () => {
  console.log("⚡️[server]: Server is running at http://localhost:3000");
});
