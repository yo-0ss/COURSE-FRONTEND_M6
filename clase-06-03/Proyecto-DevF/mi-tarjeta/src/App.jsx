import Tarjeta from './Tarjeta';

function App() {
  return (
    <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100vw'
    }}>
      <h1>Tarjeta de Presentación</h1>
      {/* Renderizamos el componente Tarjeta */}
      <Tarjeta />
    </div>
  );
}

export default App;
