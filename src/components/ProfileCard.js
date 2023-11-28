import { useState } from "react";

function ProfileCard( props ){

const [count , setCount]= useState(5);

let {titulo, arroba, img} = props

function handleClick(){
    console.log("Se clickeo el boton")
    setCount( count - 1)
}



    return (
        <div className="card">
            <div className="card-img is-1by1">
                <figure className="image">
                    <img src={img} alt="logo"/>
                </figure>
            </div>

            <div className="card-content">
                <div className="media-content">
                    <p className="title is-4">{titulo}</p>
                    <p className="subtitle is-6">{arroba}</p>
                </div>
                <div className="clumns">
                    <div className="column">
                        <button onClick={handleClick} className="button is-danger is-fullwidth"> Solicitá tu turno acá </button>
                    </div>
                    <div className="column">
                        <span> Turnos Diponibles {count} </span>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default ProfileCard