import React from "react";
import "./components/PlacementDashboard.css";
import { useNavigate } from "react-router-dom";

function PlacementDashboard() {
  const navigate = useNavigate();

  return (
    <div className="placement-dashboard">
      <header className="dashboard-header">
        <h1 className="dashboard-title">Placement Dashboard</h1>
      </header>

      <div className="cards-section">
        <div className="card" onClick={() => navigate("/timeline")}>
          Timelines
        </div>
        <div className="card" onClick={() => navigate("/companies")}>
          Companies
        </div>
      </div>
    </div>
  );
}

export default PlacementDashboard;
