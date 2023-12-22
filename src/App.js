import React, { useState, useEffect } from 'react';
import ProfileCard from "./components/ProfileCard";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bulma/css/bulma.css";
import ImageList from './components/ImageList';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Galeria from "./pages/Galeria";
import Productos from './pages/Productos';
import Error from "./pages/Error";
import "./App.css";
import DetalleProducto from './components/DetalleDeProducto';
import Categoria from './components/Categorias';
import productosData from '../src/productos.json';
import Producto from './pages/Producto';
import Acordeon from './components/Acordeon';
import {getDocs , collection } from "firebase/firestore";
import { db } from "./config/firebase";


function App() {

    const items = [
        {
            id: "1",
            label: "Frases",
            content: "asas"
        },
        {
            id: "2",
            label: "Frases",
            content: "asad"
        }
    ]

    const [itemList, setItemList ] = useState ([]);
    const itemsCollectionRef = collection( db, "manicuria");


    useEffect(()=>{
        const getItemList = async ()=>{

            const data = await getDocs(itemsCollectionRef);
            const filteredData = data.docs.map( (doc)=>({
                ...doc.data(),
                id:doc.id
            }));

            setItemList(filteredData);
        }

        getItemList();

    },[])


    return (
        <div>
            <NavBar />
            <div>
                <BrowserRouter>
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route exact path="/galeria" element={<Galeria />} />
                        <Route exact path="/productos" element={<Productos />} />
                        <Route exact path="/item/:id" element={<DetalleProducto />} />
                        <Route exact path="/category/:id" element={<Categoria />} />
                        <Route path="productos/:productoId" element={<Producto/>} />
                        <Route path="*" element={<Error />} />
                    </Routes>
                </BrowserRouter>
            </div>


            <div>
                <Acordeon items={items}/>
            </div>

            <div>
                {itemList.map( (item)=>(
                    <div key={item.id}>
                        <h2> {item.nombre} </h2>
                        <h3> {item.precio} </h3>
                        <h4> {item.cantidad} </h4>
                    </div>
                ))
                }
            </div>
        </div>
        
        
    );
}

export default App;
