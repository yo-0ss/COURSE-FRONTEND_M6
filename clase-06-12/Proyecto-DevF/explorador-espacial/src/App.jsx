import React, { useState, useEffect, useRef } from 'react';
import {
  TextField,
  Button,
  Typography,
  Container,
  Box,
  Paper,
} from '@mui/material';
import PlanetaCard from './components/Planeta';

function App() {
  const [planetas, setPlanetas] = useState(() => JSON.parse(localStorage.getItem('planetas')) || []);
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [imagen, setImagen] = useState(null);
  const [modoEdicion, setModoEdicion] = useState(false);
  const [indiceEdicion, setIndiceEdicion] = useState(null);
  const inputImagenRef = useRef(null);

  useEffect(() => {
    localStorage.setItem('planetas', JSON.stringify(planetas));
  }, [planetas]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const nuevoPlaneta = {
      nombre,
      descripcion,
      imagen: imagen ? URL.createObjectURL(imagen) : null,
    };

    if (modoEdicion) {
      const nuevos = [...planetas];
      nuevos[indiceEdicion] = nuevoPlaneta;
      setPlanetas(nuevos);
      setModoEdicion(false);
      setIndiceEdicion(null);
    } else {
      setPlanetas([...planetas, nuevoPlaneta]);
    }

    setNombre('');
    setDescripcion('');
    setImagen(null);
    if (inputImagenRef.current) inputImagenRef.current.value = '';
  };

  const handleDelete = (index) => {
    const nuevos = [...planetas];
    nuevos.splice(index, 1);
    setPlanetas(nuevos);
  };

  const handleEdit = (index) => {
    const planeta = planetas[index];
    setNombre(planeta.nombre);
    setDescripcion(planeta.descripcion);
    setImagen(null); 
    setModoEdicion(true);
    setIndiceEdicion(index);
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      <Container maxWidth="sm" sx={{ mt: 4 }}>
        <Typography variant="h4" align="center" gutterBottom>
          🪐 Bitácora de Exploración
        </Typography>

        <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Nombre del planeta"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              required
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              multiline
              rows={3}
              label="Descripción"
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
              required
              sx={{ mb: 2 }}
            />
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setImagen(e.target.files[0])}
              ref={inputImagenRef}
              style={{ marginBottom: '1rem' }}
            />
            <Box>
              <Button type="submit" variant="contained" color="primary">
                {modoEdicion ? 'Actualizar' : 'Guardar'}
              </Button>
            </Box>
          </form>
        </Paper>

        <Typography variant="h5" gutterBottom>
          Planetas Registrados
        </Typography>
        {planetas.length === 0 ? (
          <Typography>No se ha registrado ningún planeta aún.</Typography>
        ) : (
          planetas.map((planeta, index) => (
            <PlanetaCard
              key={index}
              planeta={planeta}
              onDelete={() => handleDelete(index)}
              onEdit={() => handleEdit(index)}
            />
          ))
        )}
      </Container>
    </Box>
  );
}

export default App;