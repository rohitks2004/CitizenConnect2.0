import Complaint from "../models/Complaint.js";
import { createJWT } from "../utils/dbconnect.js";

export const eleComplaints = async (req, res) => { // Swapped req and res parameters

    try {
        const Complaints = await Complaint.find({ department: 'Electricity' });
        res.status(200).json(Complaints);
    } catch (error) {
        return res.status(400).json(error);
    }
}
