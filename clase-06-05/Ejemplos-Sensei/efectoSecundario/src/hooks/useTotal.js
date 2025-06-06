import { useMemo } from "react";

export default function useTotal(carrito){
    return useMemo(()=>{
        console.log(('Total actualiado...'));
        return carrito.reduce((sum, item)=> sum + item.precio * item.stock, 0)
    }, [carrito])
}