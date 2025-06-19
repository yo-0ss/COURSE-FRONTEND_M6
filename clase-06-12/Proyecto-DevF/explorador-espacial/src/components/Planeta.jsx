import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  CardMedia,
  Button,
  Box
} from '@mui/material';

function PlanetaCard({ planeta, onDelete, onEdit }) {
  return (
    <Card sx={{ mb: 2 }}>
      {planeta.imagen && (
        <CardMedia
          component="img"
          height="180"
          image={planeta.imagen}
          alt={planeta.nombre}
        />
      )}
      <CardContent>
        <Typography variant="h6">{planeta.nombre}</Typography>
        <Typography variant="body2">{planeta.descripcion}</Typography>
        <Box mt={2}>
          <Button onClick={onEdit} variant="outlined" sx={{ mr: 1 }}>
            Editar
          </Button>
          <Button onClick={onDelete} variant="outlined" color="error">
            Eliminar
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}

export default PlanetaCard;