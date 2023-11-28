import React from 'react';
import ProfileCard from "./components/ProfileCard";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bulma/css/bulma.css";
import kapping1 from "./img/kapping1.jpg";
import semi1 from "./img/semi1.jpg";
import softgel1 from "./img/softgel1.jpg";
import SearchBar from "./components/SearchBar";
import searchImage from "./api";
import ImageList from './components/ImageList';
import { useState } from 'react';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Home from "./pages/Home";
import Galeria from "./pages/Galeria";
import Productos from './pages/Productos';
import Error from "./pages/Error";
import "./App.css";



function App() {

    const [arrImage , setArrImage] = useState([]);
    const handleSubmit = async (term)=>{
        let resultado = await searchImage(term);
        setArrImage(resultado);
    }


    return (
        <div>
            <NavBar/>
            <div> 
                <SearchBar enSubmit={handleSubmit}/>
                <ImageList images={arrImage}/>
            </div>
            <div>
                <BrowserRouter> 
                    <Routes>
                        <Route path="/manicuria" element={<Home/>}/> 
                        <Route path="/galeria" element={<Galeria/>}/>
                        <Route path="/productos" element={<Productos/>}/>
                        <Route path="*" element={<Error/>}/>
                    </Routes>
                </BrowserRouter>
            </div>
            <section className="hero">
                <div className="hero-body">
                    <h1>Manicuría Argentina</h1>
                </div>
                <div>
                    <ItemListContainer greeting="¡Bienvenida a nuestra tienda de servicios e insumos!" />
                </div>
                <div className="container">
                    <div className="columns">
                        <div className="column is-4">
                            <ProfileCard titulo="Esmaltado Semipermanente" arroba="Valor: $3500" img={semi1} />
                        </div>
                        <div className="column is-4">
                            <ProfileCard titulo="Kapping en Gel" arroba="Valor: $4000" img={kapping1} />
                        </div>
                        <div className="column is-4">
                            <ProfileCard titulo="Extensión Soft Gel" arroba="Valor: $5000" img={softgel1} />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}


export default App;
