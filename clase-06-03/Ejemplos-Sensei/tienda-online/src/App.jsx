import { useMemo, useState } from 'react'
import './App.css'

function App() {

  const [carrito, setCarrito] = useState([
    {id:1, name: 'Samsuns S25', precio: 30000, stock: 1},
    {id:2, name:'Laptop', precio: 25000, stock: 1}
  ])


  const total = useMemo(() => {
    console.log('Calculando Precio...')

    return carrito.reduce((sum, item) => sum + item.precio * item.stock, 0)
  }, [carrito])

  const aumentarStock = (id) => {
    setCarrito(prev =>
      prev.map(item => 
        item.id === id ? {...item, stock: item.stock + 1} : item
      )
    )
  }

  return (
    <>
      <section>

        <ul>
          {carrito.map(producto => (
          <li>
            {producto.name} - ${producto.precio} x {producto.stock} unidades
            <button onClick={() => aumentarStock(producto.id)}>Añadir Producto</button>
          </li>
          ))}
        </ul>

        <h1>Total: ${total}</h1>
      </section>
    </>
  )
}

export default App
