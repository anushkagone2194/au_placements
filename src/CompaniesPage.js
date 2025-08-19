import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CompaniesPage.css"; // import css file

function CompaniesPage() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const companies = [
    { name: "JPMorgan", path: "/companies/jpmorgan" },
    { name: "Cisco", path: "/companies/cisco" },
    { name: "Cognizant", path: "/companies/cognizant" },
    { name: "DarwinBox", path: "/companies/darwinbox" },
    { name: "Virtusa", path: "/companies/virtusa" },
    { name: "EPAM", path: "/companies/epam" },
    { name: "PGS", path: "/companies/pgs" },
    { name: "Tech Mahindra", path: "/companies/techmahindra" },
    { name: "ServiceNow", path: "/companies/servicenow" },
    { name: "PwC", path: "/companies/pwc" },
    { name: "Accenture", path: "/companies/accenture" },
    { name: "Mindtree", path: "/companies/mindtree" },
  ];

  // Filter based on search
  const filteredCompanies = companies.filter((c) =>
    c.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="companies-page">
      <header className="header">
        <h1>Companies</h1>
      </header>

      {/* Search Bar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for companies..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Cards Grid */}
      <div className="company-cards">
        {filteredCompanies.map((company) => (
          <div
            key={company.name}
            className="company-card"
            onClick={() => navigate(company.path)}
          >
            {company.name}
          </div>
        ))}
      </div>
    </div>
  );
}

export default CompaniesPage;
