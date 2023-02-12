import { useNavigate } from "react-router-dom"
import React from "react";


function PageNotFound() {

    const navigate = useNavigate()

    setTimeout(() => {

        navigate("/");
    }, 3000);

    return (
        <div>
            <h1>Pagina no encontrada </h1>
            <h2>Te estamos redirigiendo al Inicio</h2>
        </div>
    )

}

export default PageNotFound