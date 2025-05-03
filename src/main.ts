import express from "express";
import cors from "cors";
import { appRouter } from "./routes/quotes.routes";

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", appRouter);

export default app;
