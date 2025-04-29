import dotenv from "dotenv";

dotenv.config();

const getEnv = (name: string): string => {
  const value = process.env[name];
  if (!value) {
    throw new Error("Enviroment variable not defined");
  }
  return value;
};

export const env = {
  port: parseFloat(getEnv("PORT")),
};
