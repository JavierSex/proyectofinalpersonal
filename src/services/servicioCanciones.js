import { generarToken } from "./servicioToken"
//RECETA PARA CONSUMIR UN API CON REACT a este proceso se le llama tambien como REQUEST

export async function servicioCancionesTop(){

    let token=await generarToken()
    
    //1. PA ONDE VAS y a que vas?
    //escribir la URL del servicio del api
    const URL="https://api.spotify.com/v1/artists/3TOqt5oJwL9BE2NG9MEwDa/top-tracks?market=US"

    //2. que opéracion vas a hacer en la base de datos
    //configurar y autenticar la peticion de envio hacia el servidor
    const PETICION={
        method:"GET",
        headers:{Authorization:token}//las cabezeras son los datos de control
    }

    //3. NOS VAMOS PAL RESTAURANTE
    //CONSUMIMOS EL API

    /*asincronismo*/ 
    let respuesta=await fetch(URL,PETICION)
    let canciones=await respuesta.json()

    return(canciones)
    //un componente llama a un servicio y el servicio llama a las apis
}