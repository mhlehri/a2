import express, { Request, Response } from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/products");

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.use("*", (req: Request, res: Response) => {
  res.status(404).send("404 Not Found");
});

export default app;
