import express from "express";
import { isAdminRoute,protectRoute } from "../middlewares/authMiddleWare.js";
import { eleComplaints } from "../controllers/retrieveComplaints.js";

const router=express.Router();

router.get("/ecomplaints",eleComplaints);

export default router;