import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

const CompanyCard = ({ company, onClick }) => (
  <Card 
    onClick={onClick} 
    style={{ width: 200, margin: 10, cursor: "pointer" }}
  >
    <CardMedia 
      component="img" 
      height="140" 
      image={company.image} 
      alt={company.name} 
    />
    <CardContent>
      <Typography variant="h6" align="center">{company.name}</Typography>
    </CardContent>
  </Card>
);

export default CompanyCard;
