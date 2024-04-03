import express from "express";
const router = express.Router();
import { testApi } from "../controller/user.controller.js";

router.get("/test", testApi);
export default router;