import "./Mercancia.css"

import {Footer} from "../shared/Footer/Footer"
import { useNavigate } from "react-router-dom" //aqui tenemos asistencia para el evento que sirve
//para poder navegar entre componentes

export function Mercancia(){

    //ACTIVAmos la navegacion entre componentes
    //cuando se de un evento
    let navegante=useNavigate()    
    
    //que hago cuando se de el evento
    function detectarEvento(productoSeleccionado){
        
        navegante("/ampliar",{
            state:{productoSeleccionado}
        })

    }

    let titulo="Productos de la banda..."

    let Productos=[
        {
            nombre:"Saco original Disturbed character",
            descripcion:"Saco originial comprado en el concierto emesnemeslefes en Washington d.c, sin usar, talla M 100% algodon bastante guchi. ",
            foto:"https://firebasestorage.googleapis.com/v0/b/spotyja-9de98.appspot.com/o/SacoDisturbed_producto.jpg?alt=media&token=db1892b0-f4e7-47bb-afeb-6e8269fe4bf4",
            precio:40
        },
        {
            nombre:"Mascara edicion Pandemia",
            descripcion:"Esta mascarilla está hecha con una mezcla de algodón y spandex de alta calidad. Es muy transpirable y elásticoEstá pintado con pintura de tela y una pintura especial sensible a la temperatura que es segura y no tóxicaLa pintura cambia de negro a blanco con el calor de tu aliento, por lo que cuando respiras da la ilusión de que el patrón está cambiando.Ves a través de ranuras cubiertas de malla.Esta máscara funciona mejor a temperatura ambiente promedio o más fría (65-70 grados o menos)Los vendo en Ebay también y tengo un 100% de comentarios y muchos clientes satisfechos. ¡Esta máscara realmente funciona! !Se adapta a casi cualquier persona.",
            foto:"https://firebasestorage.googleapis.com/v0/b/spotyja-9de98.appspot.com/o/MascaraDisturbed.webp?alt=media&token=79db54e7-d761-4093-b7d5-733d032cbc90",
            precio:5
        },
        {
            nombre:"Disco disturbed inside the fire",
            descripcion:"Evolution es el séptimo álbum de estudio de la banda estadounidense de heavy metal Disturbed. Fue lanzado el 19 de octubre de 2018 por Reprise Records. El primer sencillo del álbum, 'Are You Ready', se lanzó antes que el álbum en agosto de 2018, mientras que el segundo sencillo, 'A Reason to Fight', se lanzó un mes después. El tercer sencillo, 'No More', fue lanzado el 2 de junio de 2019. El álbum debutó en el número cuatro en el Billboard 200.",
            foto:"https://firebasestorage.googleapis.com/v0/b/spotyja-9de98.appspot.com/o/DiscoDisturbed.jpg?alt=media&token=4d0b80b1-06d7-4829-b0b4-6706f225cd7f",
            precio:80
        },
        {
            nombre:"Baso autografiado",
            descripcion:'¡Vaso de pinta con la sonrisa perturbada de The Guy! Es la mascota de Disturbed y ha aparecido en varios álbumes como el "personaje encapuchado" en la portada del álbum y en videos musicales como el "héroe" que termina derrotando a grandes corporaciones o ejércitos.',
            foto:"https://firebasestorage.googleapis.com/v0/b/spotyja-9de98.appspot.com/o/BasoDisturbed_producto.jpg?alt=media&token=753211bb-1a57-47ec-b2e6-eb7e734e100d",
            precio:100
        },
        {
            nombre:"Gorra Fanmade validada",
            descripcion:"Disturbed - Sonic Silver Icon & Logo - Gorra de béisbol con licencia oficial. Con un diseño metálico brillante en relieve. Estas gorras de béisbol negras 100% algodón son ajustables en la parte posterior para adaptarse a la mayoría de los tamaños de cabeza. Son perfectos para proteger los ojos del sol en los días soleados y ayudar a mantener el calor cuando hace más frío. ¡También te ayudan a lucir genial!",
            foto:"https://firebasestorage.googleapis.com/v0/b/spotyja-9de98.appspot.com/o/gorraDisturbed.jpeg?alt=media&token=5575d684-717e-4150-9406-8b7547c4e6f4",
            precio:35
        },
        {
            nombre:"Collar militar disturbed premier pass edition",
            descripcion:"Punk Rock Biker - Joyería gótica de metal pesado imparcial para todas las religiones, colgante de peltre perturbado para hombre, collar unisex de protección amuleto de la suerte medallón talismán con cadena de bola plateada, Metal",
            foto:"https://firebasestorage.googleapis.com/v0/b/spotyja-9de98.appspot.com/o/CollarDisturbed.jpg?alt=media&token=ae72d648-6c05-486b-a146-d75c8bf61aa4",
            precio:60
        }
    ]

    return(
        <>
            <h1>{titulo}</h1>
            <div className="container">
                <div className="row row-cols-1 row-cols-md-3 g-5">
                    
                    {
                        Productos.map(function(producto,id){//producto es una variable auxiliar
                            return(
                                //aqui se crean muchos fragmentos puesto que se esta recorriendo un map
                                //y el primer caso para el problema del key es cambiar el fragmento a <></> a un div <div><div/>
                                <div key={id}/**aqui se interpolo lo cual tengo que investigar*/>
                                    <div className="col">

                                        <div className="card h-100 shadow w-100">

                                            <div className="row text-center h-100 w-100 img-fluid">
                                                <img src={producto.foto} alt="foto" className="h-100 img-fluid w-100 text-center"/>
                                            </div>
                                            <div className="row text-center pt-5">
                                                <h1>{producto.nombre}</h1>    
                                            </div>
                                            <div className="row text-center pt-5">
                                                <h3>${producto.precio}$</h3>
                                            </div>

                                            <div className="row text-center pt-5">
                                                <button className="btn btn-primary mx-5 my-3" onClick={
                                                        function(){
                                                            detectarEvento(producto)
                                                        }
                                                    } /** a esto se le conoce como callback investigar*/>
                                                    Ampliar
                                                </button>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }                    

                </div>
            </div>

            <Footer/>
        </>
    )//aqui estoy llamando a las variables es decir interpolar
}