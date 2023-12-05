import React from 'react';
import { useParams } from 'react-router-dom';
import productosData from '../productos.json';
import 'bootstrap/dist/css/bootstrap.min.css';

const DetalleProducto = () => {
  const { id } = useParams();
  const { categories } = productosData;

  let product = null;
  categories.forEach(category => {
    const foundProduct = category.products.find(product => product.id === id);
    if (foundProduct) {
      product = foundProduct;
    }
  });

  return (
    <div className="container mt-4">
      <h2>Detalles del Producto</h2>
      {product ? (
        <div className="row">
          <div className="col-md-6">
            <img
              src={product.image}
              alt={product.name}
              className="img-fluid"
            />
          </div>
          <div className="col-md-6">
            <p className="h3 producto-nombre">Nombre: {product.name}</p>
            <p className="h5 producto-precio">Precio: ${product.price}</p>
            <p className="producto-descripcion">Descripción: {product.description}</p>
          </div>
        </div>
      ) : (
        <p>Producto no encontrado</p>
      )}
    </div>
  );
};

export default DetalleProducto;
