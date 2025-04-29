import { type Request, type Response } from "express";

export const usageController = (req: Request, res: Response) => {
  const usageOptions = {
    getAllQuotes: "/all",
  };
  res.send(usageOptions).status(200);
};
