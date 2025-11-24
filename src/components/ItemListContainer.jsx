//Solo mostrar un mensaje de bienvenida pasado a traves de props
export default function ItemListContainer(props){
    return (
        <>
            <section>
                <h2>{props.bienvenida}</h2>
            </section>
        </>
    )
}