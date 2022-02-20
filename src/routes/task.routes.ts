import { Router } from "express";
import createTaksController from "../controllers/user.controller";

const router = Router();

router.route("/task").post(createTaksController);

export default router;
