import { type Request, type Response } from "express";
import { loadQuotes } from "../data/quotes.js";
import { Quote } from "../types/quotes.types.js";

export const usageController = (req: Request, res: Response) => {
  const usageOptions = {
    allQuotes: "/quotes",
    radomQuote: "/quotes/random",
  };
  res.send(usageOptions).status(200);
};

export const quotesController = (req: Request, res: Response) => {
  const quotes: Quote[] = loadQuotes();
  res.json(quotes).status(200);
};

export const randomQuoteController = (req: Request, res: Response) => {
  const quotes: Quote[] = loadQuotes();
  const length = quotes.length;
  const randomIndex = Math.floor(Math.random() * length + 0);
  const randomQuote = quotes[randomIndex];
  res.json(randomQuote).status(200);
};
