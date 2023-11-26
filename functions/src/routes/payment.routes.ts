import { Router } from "express";
import { createSession } from "../controllers/payment.controller";
const router = Router();

router.post("/create-checkout-session", createSession);
router.get("/", (req, res) => res.send("hola"));
router.get("/cancel", (req, res) => res.redirect("/cancel.html"));

export default router;
