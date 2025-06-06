import React, { useEffect, useState } from "react";
import Product from './Product'
import useTotal from "../hooks/useTotal";

const productosIniciales = [
    {id: 1, nombre:'Tableta Grafica', precio: 3000, stock: 1},
    {id: 2, nombre:'Monitor', precio: 4000, stock: 3}
]

function CarritoCompras() {
    const [carrito, setCarrito] = useState(productosIniciales)
    const total = useTotal(carrito) 

    useEffect(() => {
        console.log('Total actualizado ', total);
        
    }, [total]);

    const CambiarStock = (id, cantidad) => {
        setCarrito(prev =>
            prev.map(item =>
                item.id === id ? {...item, stock: Math.max(0, item.stock +cantidad)} : item
            )
        )
    }

    return (
        <>
            <section>
                <h2>Lista de Productos</h2>
                <h3>Total: ${total}</h3>
                <ul>
                    {carrito.map(producto => (
                        <Product
                            key={producto.id}
                            producto={producto}
                            onCambiarStock={CambiarStock}
                        />
                    ))}
                </ul>
            </section>
        </>
    )
}

export default CarritoCompras;