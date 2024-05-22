import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import { ProductRoute } from "./app/modules/products/product.route";
import { OrderRoute } from "./app/modules/orders/order.route";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/products", ProductRoute);
app.use("/api/orders", OrderRoute);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.use("*", (req: Request, res: Response, next: NextFunction) => {
  res.status(404).send({
    success: false,
    message: "Route not found",
  });
  next();
});

export default app;
