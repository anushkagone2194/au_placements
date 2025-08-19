import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";       
import PlacementDashboard from "./PlacementDashboard"; 
import TimelinePage from "./TimelinePage";            
import CompaniesPage from "./CompaniesPage";           
import Jpmorgan from "./listofcompanies/Jpmorgan";     // ✅ Import Jpmorgan
import Cognizant from "./listofcompanies/Cognizant";   // ✅ Import Cognizant
import Cisco from "./listofcompanies/Cisco";           // ✅ Import Cisco
import Epam from "./listofcompanies/Epam";

function App() {
  return (
    <Router>
      <Routes>
        {/* Default route: HomePage */}
        <Route path="/" element={<HomePage />} />

        {/* Other pages */}
        <Route path="/placement" element={<PlacementDashboard />} />
        <Route path="/timeline" element={<TimelinePage />} />
        <Route path="/companies" element={<CompaniesPage />} />
<Route path="/companies/epam" element={<Epam />} />

        {/* Company Detail Pages */}
        <Route path="/companies/jpmorgan" element={<Jpmorgan />} />
        <Route path="/companies/cognizant" element={<Cognizant />} />
        <Route path="/companies/cisco" element={<Cisco />} /> {/* ✅ Added Cisco */}
      </Routes>
    </Router>
  );
}

export default App;
