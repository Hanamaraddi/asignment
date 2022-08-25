import express from "express";
import user from "../Controllers/User-controllers.js";

const router = express.Router();

router.post("/adduser", user);

export default router;
