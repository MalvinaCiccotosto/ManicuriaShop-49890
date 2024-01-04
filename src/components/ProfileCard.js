import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function ProfileCard(props) {
    let { titulo, arroba, img, id, stock } = props;
    const [count, setCount] = useState(stock || 0);


    function handleClick() {
        if (count > 0) {
            setCount(count - 1);
        }
    }


    return (
        <div className="card mb-3">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={img} alt="logo" className="img-fluid" />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h4 className="card-title">{titulo}</h4>
                        <p className="card-text">{arroba}</p>
                        <div className="row">
                            <div className="col-md-4">
                                <a href={`/item/${id}`} className="btn btn-danger btn-block">
                                    Detalles
                                </a>
                            </div>
                            <div className="col-md-4">
                                <button onClick={handleClick} className="btn btn-danger btn-block">
                                    {count === 0 ? "Turnos Agotados" : "Solicitá tu turno acá"}
                                </button>
                            </div>
                            <div className="col-md-4">
                                <span> Turnos Disponibles {count} </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileCard;
