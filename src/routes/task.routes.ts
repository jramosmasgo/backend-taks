import { Router } from "express";
import createTaksController from "../controllers/task/createTaskController";

const router = Router();

router.route("/task").post(createTaksController);

export default router;
