import fs from "fs";
import path from "path";

const filePath = path.join(__dirname, "quotes.json");

export const loadQuotes = () => {
  const rawData = fs.readFileSync(filePath, "utf8");
  return JSON.parse(rawData);
};
