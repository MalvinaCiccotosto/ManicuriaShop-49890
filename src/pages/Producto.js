import { useParams, Link } from "react-router-dom";
import listaProductos from "../data";


function Producto(){

    console.log( useParams() );

    const {productoId} = useParams();

    const producto = listaProductos.find((producto)=>producto.id == productoId)
    
    const {image,title,price} = producto;


    return (
        <div>
            <img src={image}/>
            <h2>{title}</h2>
            <h2>{price}</h2>
            <Link to="/productos">Volver</Link>
        </div>
    )
}


export default Producto;