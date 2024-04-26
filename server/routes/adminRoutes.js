import express from "express";
import { isAdminRoute,protectRoute } from "../middlewares/authMiddleWare.js";
import { eleComplaints, updateComplaint } from "../controllers/retrieveComplaints.js";

const router=express.Router();

router.get("/ecomplaints",eleComplaints);
router.post('/update',updateComplaint)

export default router;