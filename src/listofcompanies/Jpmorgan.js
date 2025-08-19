import React from "react";
import "./Jpmorgan.css"; // correct path

function Jpmorgan() {
  return (
    <div className="jpmc-container">
      <div className="jpmc-card">
        <h1 className="jpmc-header">JPMorgan</h1>

        {/* Academic Requirements */}
        <section className="jpmc-section">
          <h2>Academic Requirements</h2>
          <p>
            Minimum CGPA Required: <span className="highlight">8.5</span>
          </p>
        </section>

        {/* CTC Offered */}
        <section className="jpmc-section">
          <h2>CTC Offered</h2>
          <p>
            Total CTC: <span className="highlight">19.75 LPA</span>
          </p>
          <p>
            Base: <span className="highlight">13 LPA</span>
          </p>
        </section>

        {/* Hiring Process */}
        <section className="jpmc-section">
          <h2>Hiring Process</h2>
          <ol className="process-list">
            <li>
              <strong>Resume Shortlisting:</strong> CGPA above{" "}
              <span className="highlight">8.8</span> usually shortlisted.
            </li>
            <li>
              <strong>Coding Round:</strong> 2 coding questions (60 mins),
              Medium–Hard (LeetCode).
            </li>
            <li>
              <strong>Communication Round through HireVue:</strong> 3 situational questions (audio will be recorded).
            </li>
            <li>
              <strong>Hackathon Round:</strong> Offline hackathon, not necessary
              to win.
            </li>
            <li>
              <strong>Interview:</strong> Technical (DSA) + HR.
            </li>
          </ol>
        </section>
      </div>
    </div>
  );
}

export default Jpmorgan;
