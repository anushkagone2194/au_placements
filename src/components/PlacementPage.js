import React, { useState } from "react";
import { TextField, Typography, Container, Grid, Card, CardMedia, CardContent, Button } from "@mui/material";
import CompanyCard from "./CompanyCard"; // Separate component for company details

const companies = [
  {
    name: "TCS",
    image: "https://logo.clearbit.com/tcs.com",
    eligibility: "B.Tech, Any branch",
    ctc: "10 LPA",
    rounds: "Aptitude, Technical, HR",
    difficulty: "Medium",
    pattern: "Written + Technical + HR"
  },
  {
    name: "Infosys",
    image: "https://logo.clearbit.com/infosys.com",
    eligibility: "B.Tech, Any branch",
    ctc: "8 LPA",
    rounds: "Aptitude, Technical, HR",
    difficulty: "Easy",
    pattern: "Written + Technical + HR"
  },
  // Add more companies here
];

const hiringTimeline = {
  January: ["TCS", "Infosys"],
  February: ["Microsoft"],
  March: ["Google", "Amazon"],
  // Add months and expected companies
};

const PlacementPage = () => {
  const [view, setView] = useState("timeline"); // timeline or insights
  const [search, setSearch] = useState("");
  const [selectedCompany, setSelectedCompany] = useState(null);

  const filteredCompanies = companies.filter(c =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Container>
      <Typography variant="h4" align="center" gutterBottom>
        Placement Dashboard
      </Typography>

      {/* Toggle buttons */}
      <Button onClick={() => setView("timeline")}>Hiring Timeline</Button>
      <Button onClick={() => setView("insights")}>Company Insights</Button>

      {view === "timeline" && (
        <div>
          <Typography variant="h5" gutterBottom>Hiring Timeline</Typography>
          {Object.entries(hiringTimeline).map(([month, comps]) => (
            <div key={month}>
              <Typography variant="h6">{month}</Typography>
              {comps.map(comp => (
                <Button key={comp} onClick={() => setSelectedCompany(comp)}>
                  {comp}
                </Button>
              ))}
            </div>
          ))}
        </div>
      )}

      {view === "insights" && (
        <div>
          <Typography variant="h5" gutterBottom>Company Insights</Typography>
          <TextField
            label="Search Company"
            fullWidth
            margin="normal"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Grid container spacing={2}>
            {filteredCompanies.map(c => (
              <Grid item xs={12} sm={6} md={4} key={c.name}>
                <Card onClick={() => setSelectedCompany(c.name)} style={{ cursor: "pointer" }}>
                  <CardMedia
                    component="img"
                    height="140"
                    image={c.image}
                    alt={c.name}
                  />
                  <CardContent>
                    <Typography variant="h6">{c.name}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </div>
      )}

      {/* Show selected company details */}
      {selectedCompany && (
        <CompanyCard
          company={companies.find(c => c.name === selectedCompany)}
        />
      )}

      {!selectedCompany && (
        <Typography variant="h6" align="center" style={{ marginTop: "20px" }}>
          Please select a company to see details
        </Typography>
      )}
    </Container>
  );
};

export default PlacementPage;
