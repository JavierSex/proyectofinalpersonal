import { useLocation } from "react-router-dom"

export function AmpliarInfo(){

    let Datosrecibidos=useLocation()

    let producto=Datosrecibidos.state.productoSeleccionado//el datos recibidos de normales se llama de otra fotma como location

    console.log(producto)

    return(
        <>
            <img className="h-100 img-fluid">{producto.foto}</img>
            <h1>{producto.nombre}</h1>
        </>
    )
}