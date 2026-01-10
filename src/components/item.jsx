function Item({ title, img, price }) {
    return (
        <div className="item-card">
            <h2>{title}</h2>
            <img src={img} alt={title} />
            <p>{price}</p>
            <button>Ver el Producto</button>
        </div>
    )
}

export default Item