import './Home.css'

import {Footer} from "../shared/Footer/Footer"

export function Home(){

return(
    <>
        <section>
            <div class="banner">

            </div>
        </section>
        <section>
            <div class="container">
                <div class="row">
                    <div class="col-12 col-md8">
                        <h1>DISTURBED</h1>                        
                        <p>
                            Disturbed es una banda de heavy metal y nu metal formada en Chicago, Illinois, por David Draiman (voz), Dan Donegan (guitarra), John Moyer (bajo) y Mike Wengren (batería). Sus exintegrantes son el cantante Erich Awalt y el bajista Steve Kmak.
                            Fundada en 1994 bajo el nombre de Brawl, y solo hasta 1996 cuando David Draiman fue contratado como nuevo vocalista cambió su nombre a Disturbed. Comenzaron como una banda de nu metal pero después mostraron fuertes influencias del heavy metal incorporando solos y riffs de guitarra más técnicos.
                            Hasta abril de 2017, han vendido 16 millones de álbumes en todo el mundo, convirtiéndose en uno de los más grandes taquilleros en los últimos años.1​ La banda ha lanzado seis álbumes de estudio, cinco de los cuales han consecutivamente debutado en el número uno en la lista Billboard 200.2​ Disturbed ha ganado varios reconocimientos, teniendo 1 disco de plata, 19 discos de platino, 2 sencillos de oro y un sencillo platino.
                            La banda entró en receso desde octubre de 2011, durante el cual los miembros de la banda se centraron en varios proyectos paralelos, retornando en junio del año 2015, con el lanzamiento de su primer álbum en cinco años, Immortalized, el 21 de agosto.
                        </p>
                        <img src='https://firebasestorage.googleapis.com/v0/b/spotyja-9de98.appspot.com/o/Inmortalizedimg.jpg?alt=media&token=677a6722-d77e-4a1a-b9b0-e7316710f143' class="">

                        </img>
                    </div>
                    <div class="col-12 col-md4 mt-5 conciertos">
                        <div class="row">
                            <div class="col-1">
                                <i class="bi bi-fire iconos"></i>                        
                            </div>                            
                            <div class="col">
                                <div class="row">
                                    <h1>Medellin</h1>
                                </div>
                                <div class="row">
                                    <h1>DEC 2</h1>
                                </div>
                            </div>
                        </div>
                        <div class="row  mt-5">
                            <div class="col-1">
                                <i class="bi bi-fire iconos"></i>                        
                            </div>
                            <div class="col">
                                <div class="row">
                                    <h2>Cali</h2>
                                </div>
                                <div class="row">
                                    <h2>DEC 12</h2>
                                </div>
                            </div>                            
                        </div>    
                        <div class="row mt-5">
                            <div class="col-1">
                                <i class="bi bi-fire fs-3"></i>                                 
                            </div>
                            <div class="col">
                                <div class="row">
                                    <h3>Amsterdan</h3>
                                </div>
                                <div class="row">
                                    <h3>ENE --</h3>
                                </div>
                            </div>                                                        
                        </div>    
                        <div class="row mt-5">
                            <div class="col-1">
                                <i class="bi bi-fire fs-3"></i>                        
                            </div>
                            <div class="col">
                                <div class="row">
                                    <h4>Washington</h4>
                                </div>
                                <div class="row">
                                    <h4>FEB --</h4>
                                </div>
                            </div>                            
                        </div>    
                    </div>
                </div>
            </div>
            
        </section>
        <section>
           <div class="container-fluid mt-5">
            <div class="row">
                
                <div class="col-12 col-md-4">

                    <img src="https://firebasestorage.googleapis.com/v0/b/spotyja-9de98.appspot.com/o/disturbedNoticia3.jpg?alt=media&token=5c6f3b92-355b-48d5-be6d-875d70e89946" alt="" class="img-fluid w-100"/>

                </div>

                <div class="col-12 col-md-4">

                    <img src="https://firebasestorage.googleapis.com/v0/b/spotyja-9de98.appspot.com/o/disturbedNoticia2.jpg?alt=media&token=c3ad2685-9673-45c2-ac2c-7a13e10185a7" alt="" class="img-fluid w-100"/>

                </div>

                <div class="col-12 col-md-4">

                    <img src="https://firebasestorage.googleapis.com/v0/b/spotyja-9de98.appspot.com/o/disturbedNoticia.jpg?alt=media&token=c1d4df7b-f6f9-4906-9af4-54c92e8239e6" alt="" class="img-fluid w-100"/>

                </div>
            </div>
           </div>

        </section>

        <Footer/>

    </>//fragment agrupar etiqueta
    
)

}