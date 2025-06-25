import React, { useState } from "react";
import InputNumber from "./InputNumber";
import Message from "./Message";
import RestartButton from "./RestartButton";

import { Typography, Container, Paper } from "@mui/material";

export default function Game() {
  const [numeroSecreto, setNumeroSecreto] = useState(generarNumeroAleatorio());
  const [numeroUsuario, setNumeroUsuario] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [juegoFinalizado, setJuegoFinalizado] = useState(false);

  function generarNumeroAleatorio() {
    return Math.floor(Math.random() * 100) + 1;
  }

  const manejarIntento = () => {
    const intento = parseInt(numeroUsuario);
    if (isNaN(intento)) {
      setMensaje("Por favor, ingresa un número válido");
      return;
    }

    if (intento === numeroSecreto) {
      setMensaje("¡Correcto! 🎉");
      setJuegoFinalizado(true);
    } else if (intento < numeroSecreto) {
      setMensaje("El número es mayor ⬆️");
    } else {
      setMensaje("El número es menor ⬇️");
    }
  };

  const reiniciarJuego = () => {
    setNumeroSecreto(generarNumeroAleatorio());
    setNumeroUsuario('');
    setMensaje('');
    setJuegoFinalizado(false);
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Paper elevation={3} sx={{ padding: 4, textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom>
          Adivina el Número
        </Typography>

        <InputNumber
          valor={numeroUsuario}
          setValor={setNumeroUsuario}
          manejarIntento={manejarIntento}
          disabled={juegoFinalizado}
        />

        <Message mensaje={mensaje} />

        {juegoFinalizado && <RestartButton onRestart={reiniciarJuego} />}
      </Paper>
    </Container>
  );
}