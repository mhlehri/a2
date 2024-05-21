import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import { ProductRoute } from "./app/modules/products/product.route";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/products", ProductRoute);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.use("*", (req: Request, res: Response, next: NextFunction) => {
  res.status(404).send("404 Not Found");
  next();
});

export default app;
