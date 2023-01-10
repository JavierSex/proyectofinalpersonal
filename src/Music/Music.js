import { servicioCancionesTop } from "../services/servicioCanciones"

export function Music(){
    
    servicioCancionesTop()

    return(
        /*norma REST es una regla las apis son programas que viven en el backend
        cuando yo uso una api es porque yo quiero conseguir alguna informacion es decir entrar una BD.

            1- la primera regla: para donde vas ? -- URL

            2- la segunda norma. a que vas ? -- Endpoint

            3- que metodo voy a usar o que operacion:

                *En las Bd se pueden hacer las siguientes acciones las cuales las normalizaron*

                escribir --> POST
                leer --> GET
                editar --> PUT
                borrar --> DELETE


            JSON
            es el lenguaje normalizador para el consumo de apis
            y recordemos que las apis SE CONSUMEN EN EL FRONT TRAER DATOS 
            Y PARA CREAR LAS MISMAS APIS NOS TOCA HACERLAS DESDE EL BACK.
        */
 
        <>
            <h1>
                MUSICA CARGANDO...
            </h1>
        </>
       )
}