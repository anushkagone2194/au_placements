import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

const Timeline = () => {
  const today = new Date();
  const companies = [
    { name: "Infosys", visitDate: "2025-09-10" },
    { name: "TCS", visitDate: "2025-09-15" },
    { name: "Wipro", visitDate: "2025-09-05" },
  ];

  const getStatus = (date) => {
    const visit = new Date(date);
    if (visit < today) return "Completed";
    if (visit.toDateString() === today.toDateString()) return "Ongoing";
    return "Upcoming";
  };

  const getColor = (status) => {
    if (status === "Completed") return "grey";
    if (status === "Ongoing") return "blue";
    return "green";
  };

  return (
    <div style={{ padding: "20px" }}>
      <Typography variant="h5">Campus Placement Timeline</Typography>
      {companies.sort((a,b) => new Date(a.visitDate)-new Date(b.visitDate)).map((company, index) => {
        const status = getStatus(company.visitDate);
        return (
          <Card key={index} style={{ marginTop: "10px", borderLeft: `5px solid ${getColor(status)}` }}>
            <CardContent>
              <Typography variant="h6">{company.name}</Typography>
              <Typography>Visit Date: {company.visitDate}</Typography>
              <Typography>Status: {status}</Typography>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default Timeline;
