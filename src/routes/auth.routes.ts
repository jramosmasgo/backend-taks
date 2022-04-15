import { Router } from "express";
import registerController from "../controllers/auth/registerController";
import signInController from "../controllers/auth/signInController";
import bodyRequestValidator from "../middlewares/bodyRequestValidaor";
import loginValidation from "../validators/auth/loginValidator";
import registerValidation from "../validators/auth/registerValidor";

const router = Router();

router.post(
  "/auth/register",
  bodyRequestValidator(registerValidation),
  registerController
);
router.post(
  "/auth/login",
  bodyRequestValidator(loginValidation),
  signInController
);

export default router;
