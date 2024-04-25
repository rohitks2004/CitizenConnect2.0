import express from "express";
import { isAdminRoute,protectRoute } from "../middlewares/authMiddleWare.js";
import { eleComplaints } from "../controllers/retrieveComplaints.js";

const router=express.Router();

router.get("/complaints",eleComplaints);


export default router;