import {Outlet} from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";



function Home(){

    return (
        <div>
            <Outlet/>
        </div>
    )
}


export default Home;