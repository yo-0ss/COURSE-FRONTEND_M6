import React from "react";
import { Button } from "@mui/material";

export default function RestartButton({ onRestart }) {
  return (
    <Button variant="outlined" onClick={onRestart}>
      Reiniciar Juego 🔄
    </Button>
  );
}