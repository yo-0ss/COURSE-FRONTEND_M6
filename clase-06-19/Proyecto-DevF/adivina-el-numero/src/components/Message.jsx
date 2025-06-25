import React from "react";
import { Typography } from "@mui/material";

export default function Message({ mensaje }) {
  return (
    <Typography variant="h6" sx={{ my: 2 }}>
      {mensaje}
    </Typography>
  );
}
