import express from "express";
import { createOrder } from "./order.controller";

const router = express.Router();

router.get("/", (req, res) => {});
router.post("/", createOrder);

export const OrderRoute = router;
