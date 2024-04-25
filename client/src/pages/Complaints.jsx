import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import { RiHomeSmileFill } from "react-icons/ri";
import "./CSS/Complaints.css";

function Complaints() {
    const [complaints, setComplaints] = useState([]);
    const filtered_complaints = complaints.filter(complaints => !complaints.resolved)
    useEffect(() => {
      async function fetchComplaints() {
          try {
              const response = await axios.get('http://localhost:8800/api/admin/ecomplaints');
              const dataWithImages = await Promise.all(
                  response.data.map(async (complaint) => {
                      const imageUrl = await convertToImage(complaint.image);
                      return { ...complaint, imageUrl };
                  })
              );
              setComplaints(dataWithImages);
          } catch (error) {
              console.error('Error fetching complaints:', error);
          }
      }
      fetchComplaints();
  }, []);

  async function convertToImage(base64String) {
      try {
          const response = await fetch(`data:image/jpeg;base64,${base64String}`);
          const blob = await response.blob();
          return URL.createObjectURL(blob);
      } catch (error) {
          console.error('Error converting to image:', error);
          return null;
      }
  }
  function onResolve(){

  }
  
      return (
        <div className='container home-container'>
          <div className="head1">
             <h2 className='h2t'>Complaints</h2>
             <Link to="/home-Admin"><RiHomeSmileFill className='home-icon' /></Link>
          </div>
            <div className="complaints-container">
                { 
                 filtered_complaints.map((complaint) => (
                    <div key={complaint._id} className="complaint" style={{"border":"none"}}>
                        <h3>{complaint.problem}</h3>
                        <p><span>Department:</span> {complaint.department}</p>  
                        <p><span>Description:</span> {complaint.description}</p>
                        <p><span>Location:</span> {complaint.location}</p>
                        <p><span>Date:</span> {new Date(complaint.date).toLocaleDateString()}</p>
                        {complaint.imageUrl && <img src={complaint.imageUrl} alt="Complaint" />}
                        <button onClick={onResolve} >Resolve</button>
                    </div>
                ))}
            </div>
        </div>
    );

    // async function convertToJpegImage(base64String) {
    //     try {
    //         const response = await fetch(base64String);
    //         const blob = await response.blob();
    //         return URL.createObjectURL(blob);
    //     } catch (error) {
    //         console.error('Error converting to JPEG image:', error);
    //         return null;
    //     }
    // }

    // async function convertToJpgImage(base64String) {
    //     try {
    //         const response = await fetch(base64String);
    //         const blob = await response.blob();
    //         return URL.createObjectURL(blob);
    //     } catch (error) {
    //         console.error('Error converting to JPG image:', error);
    //         return null;
    //     }
    // }

    // async function convertToPngImage(base64String) {
    //     try {
    //         const response = await fetch(base64String);
    //         const blob = await response.blob();
    //         return URL.createObjectURL(blob);
    //     } catch (error) {
    //         console.error('Error converting to PNG image:', error);
    //         return null;
    //     }
    // }
}

export default Complaints;