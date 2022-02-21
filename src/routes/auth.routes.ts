import { Router } from "express";
import registerController from "../controllers/auth/registerController";
import bodyRequestValidator from "../middlewares/bodyRequestValidaor";
import registerValidation from "../validators/auth/registerValidor";

const router = Router();

router.post('/auth/register', bodyRequestValidator(registerValidation), registerController);

export default router;
