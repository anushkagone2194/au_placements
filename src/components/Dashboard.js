import React from "react";
import { Card, CardContent, Typography, Grid, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const companies = [
    { id: 1, name: "Infosys", role: "Developer", visitDate: "2025-09-10" },
    { id: 2, name: "TCS", role: "Tester", visitDate: "2025-09-15" },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <Typography variant="h5" gutterBottom>
        Welcome, [User Name]!
      </Typography>
      <Grid container spacing={2}>
        {companies.map((company) => (
          <Grid item xs={12} sm={6} md={4} key={company.id}>
            <Card>
              <CardContent>
                <Typography variant="h6">{company.name}</Typography>
                <Typography>Role: {company.role}</Typography>
                <Typography>Visit Date: {company.visitDate}</Typography>
                <Button
                  variant="contained"
                  color="secondary"
                  style={{ marginTop: "10px" }}
                  onClick={() => navigate(`/company/${company.id}`)}
                >
                  View Details
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Dashboard;
