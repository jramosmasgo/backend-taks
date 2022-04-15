import { Router } from "express";
import createTaksController from "../controllers/task/createTaskController";
import getTasksByUserController from "../controllers/task/getTasksByUser";
import tokenValidation from "../middlewares/tokenValidation";

const router = Router();

router.get("/task", tokenValidation, getTasksByUserController);
router.post("/task", tokenValidation, createTaksController);

export default router;
