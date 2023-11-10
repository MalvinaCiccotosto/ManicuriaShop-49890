import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import 'bootstrap/dist/css/bootstrap.min.css'

const CartWidget = () => {
    const cartItemCount = 5

    return (
        <div className="position-relative">
            <FontAwesomeIcon icon={faShoppingCart} size="2x" />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {cartItemCount}
            </span>
        </div>
    )
}

export default CartWidget
