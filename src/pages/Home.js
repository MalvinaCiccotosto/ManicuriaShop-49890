import React, { useState, useEffect } from 'react'
import NavBar from "../components/NavBar/NavBar"
import ProfileCard from "../components/ProfileCard"



const Home = ({ itemList }) => {
    console.log(itemList)
    const [products, setProducts] = useState(itemList || [])

    return (
        <div>
            <section className="hero">
                <div className="hero-body">
                    <h1>Manicuría Argentina</h1>
                </div>
                <div>
                    {itemList && itemList.map(product => (
                        <ProfileCard
                            key={product.id}
                            id={product.id}
                            titulo={product.name}
                            arroba={`Valor: $${product.price}`}
                            img={product.image}
                            stock={product.stock}
                        />
                    ))}
                </div>
            </section>
        </div>
    )
}


export default Home