import React from "react";

function Product({producto, onCambiarStock}) {
    return(
        <li>
            {producto.nombre} - ${producto.precio} x {producto.stock}
            <button onClick={()=> onCambiarStock(producto.id, 1)}>Agregar</button>
            <button onClick={()=> onCambiarStock(producto.id, -1)} disabled={producto.stock === 0}>Eliminar</button>
        </li>
    )
}

export default Product