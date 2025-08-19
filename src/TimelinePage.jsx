import React from "react";
import "./TimelinePage.css";

function TimelinePage() {
  const companyData = [
    ["Jan", ""],
    ["Feb", ""],
    ["Mar", "JP Morgan"],
    ["Apr", ""],
    ["May", "Cisco, Cognizant"],
    ["Jun", "DarwinBox"],
    ["Jul", "Virtusa, EPAM"],
    ["Aug", "Cognizant (Campus Drive)"],
    ["Sep", "PGS, Tech Mahindra, ServiceNow,Pwc"],
    ["Oct", "Accenture"],
    ["Nov", "LMindtree"],
    ["Dec", ""],
  ];

  return (
    <div className="timeline-page">
      {/* Header same as PlacementDashboard */}
      <header className="dashboard-header">
        <h1 className="dashboard-title">Timeline</h1>
      </header>

      {/* Table */}
      <div className="timeline-table-container">
        <table className="timeline-table">
          <thead>
            <tr>
              <th>Month</th>
              <th>Expected Company Visits</th>
            </tr>
          </thead>
          <tbody>
            {companyData.map(([month, companies], index) => (
              <tr key={index}>
                <td>{month}</td>
                <td>{companies}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TimelinePage;
