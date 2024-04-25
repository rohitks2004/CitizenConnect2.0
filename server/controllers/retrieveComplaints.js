import Complaint from "../models/Complaint.js";


export const eleComplaints = async (req, res) => { 

    try {
        const {dept}= req.query;
        const Complaints = await Complaint.find({ department:dept });
        res.status(200).json(Complaints);
    } catch (error) {
        return res.status(400).json(error);
    }
}
