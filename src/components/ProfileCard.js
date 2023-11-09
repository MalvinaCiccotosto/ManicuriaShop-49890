

function ProfileCard( props ){

let {titulo, arroba, img} = props;

    return (
        <div>
            <img src={img} alt="logo"/>
            <h3>Titulo {titulo} </h3>
            <p> {arroba} </p>
        </div>
    )
}

export default ProfileCard;