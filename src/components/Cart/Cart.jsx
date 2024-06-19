import { useContext } from 'react'
import './Cart.css'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'

const Cart = () => {
    const { cart, clearCart, totalPrice, removeItem } = useContext(CartContext)

    return (
        <div className='cart-container'>
            { cart.map((p) => (
                <div key={p.id} className='cart-item'>
                    <img src={p.img} alt={p.name}/>
                    <div className='product-info'>
                        <h2>{p.name}</h2>
                        <p>Precio unit: ${p.price}</p>
                        <p>Precio total: ${p.price * p.quantity}</p>
                        <p>Cantidad: {p.quantity}</p>
                        <button onClick={() => removeItem(p.id)} className='Button'>Eliminar item</button>
                    </div>
                </div>
                ))
            }
            { cart.length > 0 ?
            <>
                <div className='cart-summary'>
                    <h3>Total: ${totalPrice()}</h3>
                    <button onClick={() => clearCart()} className='Button'>Vaciar carrito</button>
                    <Link to='/checkout' className='Button'>Checkout</Link>
                </div>
            </> :
            <>
                <h1>No hay artículos en el carrito</h1>
                <Link to='/' className='Button'>Productos</Link>
            </>
            }
        </div>

    )
}

export default Cart