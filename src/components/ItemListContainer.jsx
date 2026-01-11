import getData from '../data/mockService'
import Item from "./item.jsx"
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

export default function ItemListContainer(props){
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const location = useLocation();

    useEffect(() => {
        setLoading(true);
        getData().then((data) => {
            let filtered = data;
            if (props.categoria === 'guantes') {
                filtered = data.filter(p => p.category === 'guantes');
            } else if (props.categoria === 'entrenamiento') {
                filtered = data.filter(p => p.category === 'entrenamiento');
            } else if (props.categoria === 'vendas-cascos') {
                filtered = data.filter(p => p.category === 'vendas' || p.category === 'cascos');
            }
            setProducts(filtered);
            setLoading(false);
        });
    }, [props.categoria, location.pathname]);

    if (loading) {
        return (
            <div className="min-h-screen w-full flex items-center justify-center bg-white">
                <div className="flex flex-col items-center">
                    <span className="text-2xl font-bold text-gray-700 mb-4">Cargando productos...</span>
                    <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                </div>
            </div>
        );
    }
    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-white">
            <section className="w-full max-w-7xl px-4 py-8 flex flex-col items-center justify-center">
                <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-800">{props.bienvenida}</h2>
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
                    {
                        products.map(
                            (product) => <Item key={product.id} id={product.id} title={product.title} img={product.img} price={product.price} />
                        )
                    }
                </div>
            </section>
        </div>
    )
}