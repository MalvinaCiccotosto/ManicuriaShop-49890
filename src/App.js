import ProfileCard from "./components/ProfileCard"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import NavBar from "./components/NavBar/NavBar"
import 'bootstrap/dist/css/bootstrap.min.css'
import "bulma/css/bulma.css"
import kapping1 from "./img/kapping1.jpg"
import semi1 from "./img/semi1.jpg"
import softgel1 from "./img/softgel1.jpg"

function App() {
    return (
        <div>
            <NavBar />
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
                            <ProfileCard titulo="derivado al servicio:" arroba="Esmaltado Semipermanente" img={semi1} />
                        </div>
                        <div className="column is-4">
                            <ProfileCard titulo="derivado al servicio:" arroba="Kapping en Gel" img={kapping1} />
                        </div>
                        <div className="column is-4">
                            <ProfileCard titulo="derivado al servicio:" arroba="Extensión Soft Gel" img={softgel1} />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default App;
