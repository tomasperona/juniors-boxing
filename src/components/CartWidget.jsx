//icono para el carrito de compras
import { useCart } from './CartContext.jsx';
export default function CartWidget() {
    const { cart } = useCart();
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    return (
        <span style={{position: 'relative', display: 'inline-block'}}>
            <i className="m-4 fa-solid fa-cart-shopping text-white hover:text-gray-200 fa-2x"></i>
            {totalItems > 0 && (
                <span style={{position: 'absolute', top: 8, right: 8, background: '#ef4444', color: 'white', borderRadius: '9999px', fontSize: '0.8rem', padding: '2px 7px', fontWeight: 'bold', minWidth: 20, textAlign: 'center'}}>{totalItems}</span>
            )}
        </span>
    );
}