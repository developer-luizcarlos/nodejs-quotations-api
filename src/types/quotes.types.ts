export type QuoteCategory = "Philosophy" | "Literature" | "Studies" | "Bible";

export interface Quote {
  quote: string;
  author: string;
  category: QuoteCategory[];
}
