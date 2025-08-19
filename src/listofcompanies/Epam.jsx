import React from "react";
import "./Epam.css";

function Epam() {
  return (
    <div className="epam-container">
      {/* Title */}
      <h1 className="epam-title">EPAM</h1>

      {/* Company Overview */}
      <div className="epam-card epam-info">
        <p>
          <strong>CTC Offered:</strong> 8.5 LPA
        </p>
        <p>
          <strong>Eligibility:</strong> Minimum 7.0 CGPA
        </p>
      </div>

      {/* Selection Process */}
      <div className="epam-card epam-process">
        <h2>Selection Process</h2>
        <ol>
          <li>
            <span className="round">Online Assessment (60 minutes):</span>{" "}
            Includes <strong>25 MCQs</strong> and{" "}
            <strong>2 coding problems</strong> of medium-to-hard difficulty.
          </li>
          <li>
            <span className="round">Group Discussion:</span>{" "}
            Candidates are assessed on clarity of thought, structured
            communication, listening skills, and collaboration.
          </li>
          <li>
            <span className="round">Technical Interview:</span>{" "}
            Focus on <strong>DSA fundamentals</strong>,{" "}
            <strong>OOP principles</strong>, and detailed{" "}
            <strong>project discussions</strong>.
          </li>
          <li>
            <span className="round">HR Interview:</span>{" "}
            A formal interaction covering cultural fit, motivation,
            communication skills, and availability.
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Epam;
