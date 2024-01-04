import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'
import listaProductos from '../data'
import './Productos.css'

const Productos = () => {
  const { addItem, isInCart } = useContext(CartContext)
  const [quantity, setQuantity] = useState(1)

  const handleQuantityChange = (event) => {
    setQuantity(parseInt(event.target.value, 10))
  }

  const onAction = (producto, quantity) => {
    addItem(producto, quantity)
    setQuantity(1)
  }



  return (
    <div>
      <h2>Productos</h2>
      <div className="galeria">
        {listaProductos.map((producto) => {
          const isProductInCart = isInCart(producto.id)

          return (
            <article key={producto.id}>
              <h4>{producto.title}</h4>
              <img src={producto.image} alt={producto.title} />
              <Link to={`/productos/${producto.id}`}>Detalle</Link>

              {!isProductInCart && (
                <div>
                  <div>
                    <label>Cantidad:</label>
                    <select value={quantity} onChange={handleQuantityChange}>
                      {[1, 2, 3, 4, 5].map((num) => (
                        <option key={num} value={num}>
                          {num}
                        </option>
                      ))}
                    </select>
                  </div>
                  <button
                    onClick={() => onAction(producto, quantity)}
                    disabled={isProductInCart}
                  >
                    Agregar al carrito
                  </button>
                </div>

              )}

              {isProductInCart && <span>Ya en el carrito</span>}
            </article>
          )
        })}
      </div>
    </div>
  )
}

export default Productos
