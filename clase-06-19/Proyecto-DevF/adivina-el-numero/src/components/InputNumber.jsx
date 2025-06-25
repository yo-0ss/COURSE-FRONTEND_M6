import React from "react";
import { TextField, Button, Stack } from "@mui/material";

export default function InputNumber({ valor, setValor, manejarIntento, disabled }) {
  return (
    <Stack direction="row" spacing={2} justifyContent="center" sx={{ mb: 2 }}>
      <TextField
        label="Tu número"
        type="number"
        value={valor}
        onChange={(e) => setValor(e.target.value)}
        disabled={disabled}
      />
      <Button variant="contained" onClick={manejarIntento} disabled={disabled}>
        Intentar
      </Button>
    </Stack>
  );
}
