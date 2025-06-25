import { useReducer, useRef, useEffect, useCallback } from "react";

const getInitialState = () => {
  const saved = localStorage.getItem("products");
  return saved ? { products: JSON.parse(saved) } : { products: [] };
};

const initialState = { products: [] };

function reducer(state, action) {
  switch (action.type) {
    case "add":
      return {
        products: [
          ...state.products,
          {
            id: Date.now(),
            name: action.name,
            quantity: 1,
          },
        ],
      };
    case "increment":
      return {
        products: state.products.map((p) =>
          p.id === action.id ? { ...p, quantity: p.quantity + 1 } : p
        ),
      };
    case "decrement":
      return {
        products: state.products.map((p) =>
          p.id === action.id && p.quantity > 1 ? { ...p, quantity: p.quantity - 1 } : p
        ),
      };
    case "remove":
      return {
        products: state.products.filter((p) => p.id !== action.id),
      };
    case "reset":
      return initialState;
    default:
      return state;
  }
}

export default function InventoryManager() {
  const [state, dispatch] = useReducer(reducer, null, getInitialState);
  const inputRef = useRef(null);

  const handleAddProduct = () => {
    const nombre = inputRef.current.value.trim().toLowerCase();
    const yaExiste = state.products.some((p) => p.name.trim().toLowerCase() === nombre);

    if (yaExiste) {
      alert("Ese producto ya está en la lista.");
      return;
    }

    if (inputRef.current.value.trim() !== "") {
      dispatch({ type: "add", name: inputRef.current.value });
      inputRef.current.value = ""; // Limpiar input
    }
  };

  const handleIncrement = useCallback((id) => {
    dispatch({ type: "increment", id });
  }, []);

  const handleDecrement = useCallback((id) => {
    dispatch({ type: "decrement", id });
  }, []);

  const handleReset = useCallback(() => {
    dispatch({ type: "reset" });
  }, []);

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(state.products));
  }, [state.products]);

  return (
    <div>
      <h2>Gestor de Inventario</h2>
      <input ref={inputRef} type="text" placeholder="Nombre del producto" />
      <button onClick={handleAddProduct}>Agregar Producto</button>
      <button onClick={handleReset}>Reset</button>

      <ul>
        {state.products.map((product) => (
          <li key={product.id}>
            {product.name} - Cantidad: {product.quantity}
            <button onClick={() => handleIncrement(product.id)}>+</button>
            <button onClick={() => handleDecrement(product.id)}>-</button>
            <button onClick={() => dispatch({ type: "remove", id: product.id })}>
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
