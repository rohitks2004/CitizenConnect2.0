import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import './CSS/Complaints.css'

function Complaints() {
    const [complaints, setComplaints] = useState([]);

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

    return (
      <>
      <Link to="/home-Admin">Back to Home Admin</Link>
          <h2>Complaints</h2>
          <div className="complaints-container">
              {complaints.map((complaint) => (
                  <div key={complaint._id} className="complaint">
                      <h3>{complaint.problem}</h3>
                      <p><strong>Department:</strong> {complaint.department}</p>  
                      <p><strong>Description:</strong> {complaint.description}</p>
                      <p><strong>Location:</strong> {complaint.location}</p>
                      <p><strong>Date:</strong> {new Date(complaint.date).toLocaleDateString()}</p>
                      {complaint.imageUrl && <img src={complaint.imageUrl} alt="Complaint" />}
                      <button onClick={onResolve} >Resolve</button>
                  </div>
              ))}
          </div>
      </>
  );
}

export default Complaints;