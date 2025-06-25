import { useReducer, useRef, useEffect, useCallback, useState } from "react";

const getInitialState = () => {
  const saved = localStorage.getItem("counterHistory");
  return saved ? { count: 0, history: JSON.parse(saved) } : { count: 0, history: [] };
};

const initialState = { count: 0, history: [] };

function reducer(state, action) {
  switch (action.type) {
    case "increment": {
      const incrementValue = action.payload ?? 1;
      return {
        count: state.count + incrementValue,
        history: [
          ...state.history,
          `+${incrementValue} (Nuevo valor: ${state.count + incrementValue})`,
        ],
      };
    }
    case "decrement":
      return {
        count: state.count - 1,
        history: [...state.history, `-1 (Nuevo valor: ${state.count - 1})`],
      };
    case "reset":
      return initialState;
    default:
      return state;
  }
}

export default function CounterGame() {
  const [state, dispatch] = useReducer(reducer, null, getInitialState);
  const [inputValue, setInputValue] = useState(1);
  const incrementBtnRef = useRef(null);

  useEffect(() => {
    incrementBtnRef.current.focus();
  }, []);

  const handleIncrement = useCallback(() => {
    dispatch({ type: "increment", payload: inputValue });
  }, [inputValue]);

  const handleDecrement = useCallback(() => {
    dispatch({ type: "decrement" });
  }, []);

  const handleReset = useCallback(() => {
    dispatch({ type: "reset" });
  }, []);

  useEffect(() => {
    localStorage.setItem("counterHistory", JSON.stringify(state.history));
  }, [state.history]);

  return (
    <div>
      <h2>Contador: {state.count}</h2>
      <input
        type="number"
        value={inputValue}
        onChange={(e) => setInputValue(Number(e.target.value))}
      />
      <button ref={incrementBtnRef} onClick={handleIncrement}>
        +
      </button>
      <button onClick={handleDecrement}>-</button>
      <button onClick={handleReset}>Reset</button>

      <h3>Historial de cambios:</h3>
      <ul>
        {state.history.map((entry, index) => (
          <li key={index}>{entry}</li>
        ))}
      </ul>
    </div>
  );
}
