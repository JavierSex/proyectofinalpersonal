export async function generarToken(){
    //existen dos tipos de envio de appis
    //su es del api al cliente es JSON{}
    //si es del cliente a la api es JSON{} y x-www-form
    //JSON ejm: {nombre:juan,edad:33}
    //x-www-form ejm: "nombre=juan & edad=33"

    const client_id="client_id=e6ee83f4e5df43a79075002953bbe798"
    const client_secret="client_secret=dee52c75a8c64c06834548d050ebc587"
    const grant_type="grant_type=client_credentials"

    let dataEnvio=grant_type+"&"+client_secret+"&"+client_id

    const URL="https://accounts.spotify.com/api/token"

    const PETICION={
        method:"POST",
        headers:{"Content-type":"application/x-www-form-urlencoded"},
        body:dataEnvio
    }

    let respuesta=await fetch(URL,PETICION)
    let token=await respuesta.json()

    let tokenDefinitivo=token.token_type+" "+token.access_token

    console.log(tokenDefinitivo)
    return(tokenDefinitivo)

}
//todo componente llama a los servicios
//pero tambien los servicios pueden llamar otros servicios
//api rest y api soat revisar