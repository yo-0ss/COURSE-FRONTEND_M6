import { useReducer } from "react";
import "./App.css";

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "incrementar":
      return { count: state.count + 1 };
    case "decrementar":
      return { count: state.count - 1 };
    case "reiniciar":
      return { count: 0 };
    default:
      throw new Error("Accion no reconocida");
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <h2>Contador: {state.count}</h2>
      <button onClick={() => dispatch({ type: "incrementar" })}>incrementar</button>
      <button onClick={() => dispatch({ type: "decrementar" })}>decrementar</button>
      <button onClick={() => dispatch({ type: "reiniciar" })}>reiniciar</button>
    </>
  );
}

export default App;
