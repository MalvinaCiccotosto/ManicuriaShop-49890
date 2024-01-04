import React, { useState, useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import 'bootstrap/dist/css/bootstrap.min.css'
import Swal from 'sweetalert2'
import { CartContext } from '../../context/CartContext'

const CartWidget = () => {
    const [isCartOpen, setIsCartOpen] = useState(false)
    const { cart, clearCart } = useContext(CartContext)

    const handleCartToggle = () => {
        if (cart.length > 0) {
            setIsCartOpen(!isCartOpen)
        } else {
            Swal.fire({
                icon: 'info',
                title: 'Carrito vacío',
                text: 'Agrega productos antes de abrir el carrito.',
            })
        }
    }

    const handleEmptyCart = () => {
        clearCart()
    }

    return (
        <div className="cart-widget-container" onClick={handleCartToggle}>
            <div className="position-relative">
                <FontAwesomeIcon icon={faShoppingCart} size="2x" />
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {cart?.length}
                </span>
            </div>

            {isCartOpen && (
                <div className="cart-dropdown dropdown-menu dropdown-menu-end show">
                    <ul className="list-group">
                        {cart.map((item) => (
                            <li key={item.id} className="list-group-item">
                                <div className="d-flex align-items-center">
                                    <img src={item.image} alt={item.title} className="cart-item-image me-3" style={{ width: '24px', height: '24px' }} />
                                    <div className="flex-grow-1">
                                        <h6 className="mb-0">{item.title}</h6>
                                        <small className="text-muted">{item.description}</small>
                                    </div>
                                    <span className="badge bg-primary">{item.quantity}</span>
                                </div>
                            </li>
                        ))}
                    </ul>

                    <button className="btn btn-danger mt-2" onClick={handleEmptyCart}>
                        Vaciar Carrito
                    </button>
                </div>
            )}
        </div>
    )
}

export default CartWidget
