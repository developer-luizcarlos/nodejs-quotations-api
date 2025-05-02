import { Router } from "express";
import {
  usageController,
  quotesController,
  randomQuoteController,
} from "../controllers/quotes.controller";

const router = Router();

router.get("/", usageController);

router.get("/quotes", quotesController);

router.get("/quotes/random", randomQuoteController);

export { router as appRouter };
