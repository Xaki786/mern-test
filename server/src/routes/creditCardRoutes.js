/** @format */

import { Router } from "express";
import { validationMiddleware } from "../middlewares/middlewares.js";
import { creditCardController } from "../controllers/creditCardController.js";

const router = Router();
router.post(
  "/api/submit",
  validationMiddleware,
  creditCardController.saveCreditCard
);

export { router as creditCardRoutes };
