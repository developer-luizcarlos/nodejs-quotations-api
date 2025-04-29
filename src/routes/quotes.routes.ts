import { Router } from "express";
import { usageController } from "../controllers/quotes.controller";

const router = Router();

router.get("/", usageController);

export { router as appRouter };
