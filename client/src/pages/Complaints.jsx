import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import { RiHomeSmileFill } from "react-icons/ri";
import "./CSS/Complaints.css";
import ResolveForm from '../components/ResolveForm';

function Complaints() {

   const [resolve ,setResolve] = useState(null);

    const [complaints, setComplaints] = useState([{
        "problem": "Muthu Pandi",
        "email": "rohit@mail",
        "department": "Electricity",
        "description": "has 100 sumo's and wants dhanalakshmi",
        "location": "madurai near meenakshiamman temple",
        "image": "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",
        "date": {
          "$date": "2024-04-28T00:00:00.000Z"
        },
        "__v": 0,
        "resolved": "true"
      },
      {
        "problem": "Power Cuts",
        "email": "Electricity@admin.com",
        "department": "Electricity",
        "description": "Enna pudunguringa",
        "location": "Coimbatore",
        "image": "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",
        "date": {
          "$date": "2024-04-01T13:27:28.081Z"
        },
        "__v": 0
      }]);
    const filtered_complaints = complaints.filter(complaints => !complaints.resolved)
    useEffect(() => {
      async function fetchComplaints() {
          try {
            const dept=localStorage.getItem('department');
              const response = await axios.get(`http://localhost:8800/api/admin/complaints?dept=${dept}`);
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
  function onResolve(complaint_id){
        setResolve(complaint_id);
  }
  
      return (
        <div className='container home-container'>
          <div className="head1">
             <h2 className='h2t'>Complaints</h2>
             <Link to="/home-Admin"><RiHomeSmileFill className='home-icon' /></Link>
          </div>
            <div className="complaints-container">
                { !resolve ?
                 filtered_complaints.map((complaint,index) => (
                    <div key={index} className="complaint" style={{"border":"none"}}>
                        <h3>{complaint.problem}</h3>
                        <p><span>Department:</span> {complaint.department}</p>  
                        <p><span>Description:</span> {complaint.description}</p>
                        <p><span>Location:</span> {complaint.location}</p>
                        <p><span>Date:</span> {new Date(complaint.date).toLocaleDateString()}</p>
                        {complaint.imageUrl && <img src={complaint.imageUrl} alt="Complaint" />}
                        <button onClick={onResolve} >Resolve</button>
                    </div> 
                ))
                :
                <ResolveForm complaint_id={resolve}/>
                }
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