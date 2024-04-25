// Solved.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { RiHomeSmileFill } from "react-icons/ri";
import "./CSS/Complaints.css";

function Solved() {
  return (
    <div className='container home-container'>
        <div className="head1">
           <h2 className='h2t'>Solved</h2>
           <Link to="/home-Admin"><RiHomeSmileFill className='home-icon' /></Link>
        </div>
        <div className="complaints-container">
              {/* {solved.map((complaint) => (
                  <div key={complaint._id} className="complaint">
                      <h3>{complaint.problem}</h3>
                      <p><span>Department:</span> {complaint.department}</p>  
                      <p><span>Description:</span> {complaint.description}</p>
                      <p><span>Location:</span> {complaint.location}</p>
                      <p><span>Date:</span> {new Date(complaint.date).toLocaleDateString()}</p>
                      {complaint.imageUrl && <img src={complaint.imageUrl} alt="Complaint" />}
                      <button onClick={onResolve} >Resolve</button>
                  </div>
              ))} */}
          </div>
    </div>
  );
}

export default Solved;
