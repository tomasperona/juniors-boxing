import { useEffect, useState } from "react"
import products from "../data/products";


export default function ItemCount({ value, setValue }){
    const [count, setCount] = useState(value ?? 1);

    useEffect(() => {
        if (typeof value === 'number') setCount(value);
    }, [value]);

    function handleResta() {
        const min = 1;
        if (count > min) {
            setCount(count - 1);
            setValue && setValue(count - 1);
        }
    }
    function handleSuma() {
        setCount(count + 1);
        setValue && setValue(count + 1);
    }

    return (
        <div className="flex items-center gap-2">
            <button onClick={handleResta} className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300">-</button>
            <span className="px-3 text-black">{count}</span>
            <button onClick={handleSuma} className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300">+</button>
        </div>
    );
}