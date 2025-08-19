import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Card, CardContent, Typography, Button } from "@mui/material";

const CompanyDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const company = {
    name: "Infosys",
    package: "6 LPA",
    rounds: [
      { roundName: "Aptitude", questions: ["Q1", "Q2"], insights: "Solve quickly" },
      { roundName: "Technical", questions: ["Q1", "Q2"], insights: "Focus on concepts" },
      { roundName: "HR", questions: ["Q1"], insights: "Be confident" },
    ],
  };

  return (
    <div style={{ padding: "20px" }}>
      <Button onClick={() => navigate("/dashboard")} variant="outlined" style={{ marginBottom: "10px" }}>
        Back to Dashboard
      </Button>
      <Typography variant="h4">{company.name}</Typography>
      <Typography variant="h6">Package: {company.package}</Typography>
      {company.rounds.map((round, index) => (
        <Card key={index} style={{ marginTop: "10px" }}>
          <CardContent>
            <Typography variant="subtitle1">{round.roundName}</Typography>
            <Typography>Questions: {round.questions.join(", ")}</Typography>
            <Typography>Insights: {round.insights}</Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default CompanyDetails;
