import React from 'react';
import ItemListContainer from './ItemListContainer/ItemListContainer';

const Categoria = ({ categoryId }) => {
  return (
    <div>
      <h2>{categoryId}</h2>
      <ItemListContainer categoryId={categoryId} />
    </div>
  );
};

export default Categoria;