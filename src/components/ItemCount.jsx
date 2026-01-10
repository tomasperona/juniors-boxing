import { useEffect, useState } from "react"
import products from "../data/products";


export default function ItemCount(){
    const [count, setCount] = useState(1);

    useEffect(()=>{} , [] )

    function handleResta() {
        const min=1;
        if (count>min) {
            setCount(count-1)
        }

    }
    function handleSuma () {
        setCount(count+1)
    }

    return (
    <div>
    <div>
        <button onClick={handleResta}>-</button>
        <span>{count}</span>
        <button onClick={handleSuma}>+</button>
    </div>
    <button></button>
    </div>
    )
}