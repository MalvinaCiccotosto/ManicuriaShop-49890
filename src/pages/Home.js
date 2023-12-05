import React, { useState, useEffect } from 'react';
import NavBar from "../components/NavBar/NavBar";
import ProfileCard from "../components/ProfileCard";
import productosData from '../productos.json';



function Home() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        console.log(productosData)
        setProducts(productosData);
    }, []);

    return (
        <div>
            <section className="hero">
                <div className="hero-body">
                    <h1>Manicuría Argentina</h1>
                </div>
                <div>
                    {products.categories && products.categories.map(category => (
                        category.products && category.products.map(product => (
                            <ProfileCard
                                key={product.id}
                                id={product.id}
                                titulo={product.name}
                                arroba={`Valor: $${product.price}`}
                                img={product.image}
                            />
                        ))
                    ))}
                </div>
            </section>
        </div>
    )
}


export default Home;