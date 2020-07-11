import express from "express";
import middleware from "./middleware";
import routes from "./services";
import { applyMiddleware, applyRoutes } from "./utils";
import errorHandlers from "./middleware/errorHandlers";
import env from "dotenv";

process.on("uncaughtException", (e) => {
  console.log(e);
  process.exit(1);
});

process.on("unhandledRejection", (e) => {
  console.log(e);
  process.exit(1);
});

env.config();
const app = express();
const PORT = 3000;

applyMiddleware(middleware, app);
applyRoutes(routes, app);
applyMiddleware(errorHandlers, app);

app.listen(PORT, () => {
  console.log(`[INFO] Server is running http://localhost:${PORT}`);
});
