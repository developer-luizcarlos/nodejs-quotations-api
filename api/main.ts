import app from "../src/main.js";
import { createServer } from "http";
import { ServerResponse, IncomingMessage } from "http";

export default function handler(req: IncomingMessage, res: ServerResponse) {
  const server = createServer(app);
  server.emit("request", req, res);
}
