import React from "react";
import { Typography } from "@mui/material";

const AdminPanel = () => {
  return (
    <div style={{ padding: "20px" }}>
      <Typography variant="h4">Admin Panel</Typography>
      <Typography>Here you can add/edit/delete companies, rounds, packages, and placement stats.</Typography>
    </div>
  );
};

export default AdminPanel;
