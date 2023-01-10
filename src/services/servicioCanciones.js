//RECETA PARA CONSUMIR UN API CON REACT

export async function servicioCancionesTop(){
    
    //1. PA ONDE VAS y a que vas?
    //escribir la url del servicio del api
    const URL="https://api.spotify.com/v1/artists/3TOqt5oJwL9BE2NG9MEwDa/top-tracks?market=US"

    //2. que opéracion vas a hacer en la base de datos
    //configurar y autenticar la peticion de envio hacia el servidor
    const PETICION={
        method:"GET",
        headers:{Authorization:"Bearer BQA5KwPcQesN9YZ2dxPbU9JUejF-8KxnQmcwRk2sgQ7Ilml29yVpfBqRLxUt38shcmSc0sGTPMlnzg5Gvgnjw4Emrb0EDiFKBaf18HXKxnZh2wUOsORCoXMPtTaUdTxz9xjoP7L0v-gmaz89qCR0g58kTldR_7Yn8rIfIMg1o3wpyGYhlH5aQ7sft1T9A_BDX48"}//las cabezeras son los datos de control
    }

    //3. NOS VAMOS PAL RESTAURANTE
    //CONSUMIMOS EL API

    /*asincronismo*/ 
    let respuesta=await fetch(URL,PETICION)
    let canciones=await respuesta.json()

    console.log(canciones)
    //un componente llama a un servicio y el servicio llama a las apis
}