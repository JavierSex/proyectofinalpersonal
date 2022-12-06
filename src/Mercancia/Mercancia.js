import {Footer} from "../shared/Footer/Footer"

export function Mercancia(){

    let titulo="Productos de la banda..."

    let Productos=[
        {
            nombre:"Saco original Disturbed character",
            foto:"https://firebasestorage.googleapis.com/v0/b/spotyja-9de98.appspot.com/o/SacoDisturbed_producto.jpg?alt=media&token=db1892b0-f4e7-47bb-afeb-6e8269fe4bf4",
            precio:40
        },
        {
            nombre:"Mascara edicion Pandemia",
            foto:"https://firebasestorage.googleapis.com/v0/b/spotyja-9de98.appspot.com/o/MascaraDisturbed.webp?alt=media&token=79db54e7-d761-4093-b7d5-733d032cbc90",
            precio:5
        },
        {
            nombre:"Disco disturbed inside the fire",
            foto:"https://firebasestorage.googleapis.com/v0/b/spotyja-9de98.appspot.com/o/DiscoDisturbed.jpg?alt=media&token=4d0b80b1-06d7-4829-b0b4-6706f225cd7f",
            precio:80
        },
        {
            nombre:"Baso autografiado",
            foto:"https://firebasestorage.googleapis.com/v0/b/spotyja-9de98.appspot.com/o/BasoDisturbed_producto.jpg?alt=media&token=753211bb-1a57-47ec-b2e6-eb7e734e100d",
            precio:100
        },
        {
            nombre:"Gorra Fanmade validada",
            foto:"https://firebasestorage.googleapis.com/v0/b/spotyja-9de98.appspot.com/o/gorraDisturbed.jpeg?alt=media&token=5575d684-717e-4150-9406-8b7547c4e6f4",
            precio:35
        },
        {
            nombre:"Collar militar disturbed premier pass edition",
            foto:"https://firebasestorage.googleapis.com/v0/b/spotyja-9de98.appspot.com/o/CollarDisturbed.jpg?alt=media&token=ae72d648-6c05-486b-a146-d75c8bf61aa4",
            precio:60
        }
    ]

    return(
        <>
            <h1>{titulo}</h1>
            <div class="container">
                <div class="row row-cols-1 row-cols-md-3 g-5">
                    
                    {
                        Productos.map(function(producto){
                            return(
                                <>
                                    <div class="col">
                                        <div class="card h-100 shadow w-200">
                                            <div class="row">
                                                <img src={producto.foto} alt="foto" class="h-100 img-fluid w-100 text-center"/>
                                            </div>
                                            <div class="row text-center pt-5">
                                                <h1>{producto.nombre}</h1>    
                                            </div>
                                            <div class="row text-center pt-5">
                                                <h3>${producto.precio}$</h3>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }

                    <Footer/>

                </div>
            </div>
        </>
    )//aqui estoy llamando a las variables es decir interpolar
}