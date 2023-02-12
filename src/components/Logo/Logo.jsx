import { Link } from "react-router-dom";

function Logo() {
    return (
        <Link to="/">
            <img className="col-2 col-md-1 " src="./assets/imagenes/tecnoMundo.png" alt="Logo Tecno Mundo" />
        </Link>

    );
}

export default Logo;