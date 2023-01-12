import { servicioCancionesTop } from "../services/servicioCanciones"
import { useState,useEffect } from "react"
/*
este es para manejar datos de forma global en el mismo componente en nuestro caso el
"respuesta" dentro de la funcion anonima

el use effect limita el numero repeticiones, reproducciones etc en un componente.
*/
export function Music(){
    
    //aqui usamos el hook usestate para almacenar la respuesta
    //del api de forma global
    //set es para llevar datos
    const[canciones,setCanciones]=useState(null)
    const[estadoCarga,setEstadoCarga]=useState(true)
    //ejemplo 1: const[usuario,setUsuario]=useState(null)
    //ejemplo 2: const[serie,setSerie]=useState(null)

    //usando el hook useEffect para limitar el consumo
    //del api a una sola vez
    useEffect(function(){

        servicioCancionesTop().then(function(respuesta){

            setCanciones(respuesta)            
            setEstadoCarga(false)

        })//espera el await y espera el then que es sacar los datos ya en el componente

    },[])
    
    //render del componente:
    if(estadoCarga==true){
        return(
            <>
                <h2>
                    CARGANDO...
                </h2>
            </>
        )
    }else{
        return(
            <>
                <h2>Canciones de la banda:</h2>
                {
                    canciones.tracks.map(function(cancion){
                        console.log(cancion)
                        return(
                            <div>
                                <h1>{cancion.name}</h1>
                                <audio controls src={cancion.preview_url}></audio>
                                <img src={cancion.album.images[0].url}></img>
                            </div>                                                        
                        )
                    })
                }
            </>// interpolar para meter js en el html <></>
        )
    }

}