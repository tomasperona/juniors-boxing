import products from '../data/products'
import Item from './Item.jsx'
import getData from '../data/mockService.js'

export default function ItemListContainer(props){

    getData().then((respuesta) => {
        console.log("Datos recibidos.")
    })

    return (
        <>
            <section>
                <h2>{props.bienvenida}</h2>
                {
                    products.map(
                        (product) => <Item key={product.id} title={product.title} img={product.img} price={product.price} />
                    )
                }
            </section>
        </>
    )
}