import "./AmpliarInfo.css"
import { useLocation } from "react-router-dom"

export function AmpliarInfo(){

    let Datosrecibidos=useLocation()

    let producto=Datosrecibidos.state.productoSeleccionado//el datos recibidos de normales se llama de otra fotma como location

    console.log(producto)

    return(
        <>
            <div className="container">
                <div className="row my-5">
                    <div className="col-12 col-md-5 border-end">
                        <img src={producto.foto} alt="foto" className="img-fluid w-100"/>
                        <p className="border ">{producto.descripcion}</p>
                    </div>
                    <div className="col-12 col-md-4 border p-3">
                        <h2 className="fw-bold">{producto.nombre}</h2>
                        <br/>                        
                        <h1 className="mt-3 display-1">${producto.precio}<span className="descuento">27% off</span></h1>
                        <br/>
                        <span className="badgetext-bg-primary">Descuento del dia</span>
                        <p>Hasta 48 cuotas</p>
                        <img src="https://firebasestorage.googleapis.com/v0/b/spotyja-9de98.appspot.com/o/Mech%2FVisa.png?alt=media&token=ec6d37c2-28fc-4fb7-9ffb-ea8496254bc1" alt="" className="img-fluid icono "/>
                        <img src="https://firebasestorage.googleapis.com/v0/b/spotyja-9de98.appspot.com/o/Mech%2FamericanXpress.png?alt=media&token=e6578c8a-f287-479d-a6e1-0f01f45ed72d" alt="" className="img-fluid ms-2 icono"/>
                        <img src="https://firebasestorage.googleapis.com/v0/b/spotyja-9de98.appspot.com/o/Mech%2FmasterCard.ico?alt=media&token=a7072695-ac3b-4446-941d-01ca762e6c5c" alt="" className="img-fluid ms-2 icono"/>
                        <br/>
                        <br/>

                        <div className="row mt-5">
                            <i className="bi bi-truck fs-1 text-success col-4 icono"></i>
                            <p className="text-success fw-bold col-8 mt-3">envio gratis a nivel nacional</p>
                        </div>
                        <p>Conoce los tiempos y las formas de envío.</p>

                        <div className="row mt-5">
                            <i class="bi bi-arrow-clockwise fs-1 text-success col-4 icono"></i>
                            <p className="text-success fw-bold col-8 mt-3">Devolucion gratis.</p>
                        </div>
                        <p>30 dias para reembolso.</p>

                    </div>
                </div>
            </div>
        </>
    )
}