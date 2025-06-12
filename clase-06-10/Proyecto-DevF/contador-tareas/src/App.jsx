import React, { useState, useEffect, useMemo } from 'react';

function App() {
  const [tareas, setTareas] = useState([]);
  const [nuevaTarea, setNuevaTarea] = useState('');
  const [duracion, setDuracion] = useState('');
  const [filtroDuracion, setFiltroDuracion] = useState(0);

  // Cálculo de tiempo total optimizado con useMemo
  const tiempoTotal = useMemo(() => {
    console.log("Calculando tiempo total...");
    return tareas.reduce((total, tarea) => total + tarea.duracion, 0);
  }, [tareas]);

  // Actualizar el título del documento cada vez que cambia el total
  useEffect(() => {
    document.title = `Total: ${tiempoTotal} minutos`;
  }, [tiempoTotal]);


  // Función para agregar una nueva tarea.
  const agregarTarea = () => {
    if (nuevaTarea && duracion) {
      const nuevaTareaObj = {
        nombre: nuevaTarea,
        duracion: parseInt(duracion)
      };
      setTareas([...tareas, nuevaTareaObj]);
      setNuevaTarea('');
      setDuracion('');
    }
  };

  const tareasFiltradas = useMemo(() => {
    return tareas.filter(tarea => tarea.duracion >= filtroDuracion);
  }, [tareas, filtroDuracion]);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Contador de Tareas</h1>

      <div style={{ marginBottom: '10px' }}>
        <input
          type="text"
          value={nuevaTarea}
          onChange={(e) => setNuevaTarea(e.target.value)}
          placeholder="Nombre de la tarea"
          style={{ marginRight: '10px' }}
        />
        <input
          type="number"
          value={duracion}
          onChange={(e) => setDuracion(e.target.value)}
          placeholder="Duración en minutos"
          style={{ marginRight: '10px' }}
        />
        <button onClick={agregarTarea}>Agregar tarea</button>
      </div>

      <div style={{ marginBottom: '10px' }}>
        <label>Filtrar tareas con duración mínima:</label>
        <input
          type="number"
          value={filtroDuracion}
          onChange={(e) => setFiltroDuracion(Number(e.target.value))}
          style={{ marginLeft: '10px' }}
        />
      </div>

      <h2>Tareas</h2>
      {tareasFiltradas.length === 0 ? (
        <p>No hay tareas que cumplan con el filtro.</p>
      ) : (
        <ul>
          {tareasFiltradas.map((tarea, index) => (
            <li key={index}>
              {tarea.nombre}: {tarea.duracion} minutos
            </li>
          ))}
        </ul>
      )}

      <h3>Total de tiempo: {tiempoTotal} minutos</h3>
    </div>
  );
}

export default App;
