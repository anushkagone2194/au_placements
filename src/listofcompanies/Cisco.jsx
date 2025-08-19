// src/listofcompanies/Cisco.js
import React from "react";
import "./Cisco.css"; // ✅ Cisco-specific styling

function Cisco() {
  return (
    <div className="cisco-container">
      <h1 className="cisco-title">Cisco</h1>

      {/* Company Overview */}
      <div className="cisco-card cisco-info">
        <p><strong>CTC Offered:</strong> 18.75 LPA</p>
        <p><strong>Eligibility Criteria:</strong> Minimum 7.5 CGPA</p>
      </div>

      {/* Selection Process */}
      <div className="cisco-card cisco-process">
        <h2>Recruitment Process</h2>
        <ol>
          <li>
            <span className="round"> Certification Round:</span>  
            Candidates must complete the certifications assigned by the course instructor.  
            Shortlisted students progress to the next stage.
          </li>

          <li>
            <span className="round"> Online Assessment:</span>  
            The assessment consists of <strong>24 MCQs</strong> and <strong>1 coding problem</strong> 
            designed to evaluate problem-solving, algorithms, and technical concepts.
          </li>

          <li>
            <span className="round"> Ideathon Round:</span>  
            Candidates submit a <strong>PPT presentation</strong> of their idea.  
           
          </li>

          <li>
            <span className="round"> Technical Interview (40 mins):</span>  
            Focuses on core programming, computer networks, projects, and ideathon-related questions.
          </li>

          <li>
            <span className="round"> Managerial Interview (20–25 mins):</span>  
            Assesses problem-solving ability, leadership, teamwork, and approach to real-world scenarios.
          </li>

          <li>
            <span className="round"> HR Interview (10–15 mins):</span>  
            Final discussion covering HR questions, cultural fit, and personal aspirations.
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Cisco;
