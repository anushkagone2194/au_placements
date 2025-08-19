import React from "react";
import "./Cognizant.css"; // ✅ separate CSS

function Cognizant() {
  return (
    <div className="company-detail">
      <h1 className="company-name">Cognizant</h1>

      {/* Academic Requirements */}
      <section>
        <h2>Academic Requirements</h2>
        <p>
          Minimum Requirement: <strong>60% or 6.5 CGPA and above</strong>
        </p>
      </section>

      {/* CTC Offered */}
      <section>
        <h2>CTC Offered</h2>
        <p>
          Range: <strong>4 – 6.75 LPA</strong>
        </p>
      </section>

      {/* Hiring Process */}
      <section>
        <h2>Hiring Process</h2>
        <ol>
          <li>
            <strong>Communication Round:</strong>  
            Questions related to English vocabulary, listening, and speaking.
          </li>
          <li>
            <strong>Technical Round (Cluster Based):</strong>  
            Default cluster: <strong>Java</strong> (others: C#, Python).  
            - 6 Questions total:  
            <ul>
              <li>2 SQL (Medium)</li>
              <li>2 Coding (1 Medium, 1 Easy)</li>
              <li>Web-based: 1 HTML, 1 CSS, 1 JavaScript</li>
            </ul>
            <em>Note: Cannot skip or go back from one question to other</em>
          </li>
          <li>
            <strong>Deep Skilling Phase:</strong>  
            8 weeks of training followed by a <strong>Deep Skilling Assessment</strong> (45 MCQs, 100 mins).
          </li>
          <li>
            <strong>Final Interview:</strong>  
            Java Full Stack + DSA focused interview.
          </li>
        </ol>
      </section>
    </div>
  );
}

export default Cognizant;
