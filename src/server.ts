import express from "express";
import cors from "cors";
import { env } from "./config/env.js";
import { appRouter } from "./routes/quotes.routes.js";

const port = env.port;

export const startServer = () => {
  const app = express();

  app.use(cors());
  app.use(express.json());
  app.use(appRouter);

  app.listen(port, () => {
    console.log(`Server working on http://127.0.0.1:${port}`);
  });
};
