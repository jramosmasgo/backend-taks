import { Router } from "express";
import getAllUsersController from "../controllers/user/getAllUsersController";

const router = Router();

router.route("/user").get(getAllUsersController);

export default router;
