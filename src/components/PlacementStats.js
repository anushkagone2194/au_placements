// PlacementStats.js
import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

const PlacementStats = () => {
  const stats = [
    { companyName: "Infosys", year: 2025, appeared: 50, selected: 10 },
    { companyName: "TCS", year: 2025, appeared: 45, selected: 12 },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <Typography variant="h5">Placement Statistics</Typography>
      {stats.map((stat, index) => (
        <Card key={index} style={{ marginTop: "10px" }}>
          <CardContent>
            <Typography variant="h6">{stat.companyName}</Typography>
            <Typography>Year: {stat.year}</Typography>
            <Typography>Appeared: {stat.appeared}</Typography>
            <Typography>Selected: {stat.selected}</Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default PlacementStats;
