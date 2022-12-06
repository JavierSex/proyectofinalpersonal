import "./Footer.css"

export function Footer(){
    return(

        <footer>
            <div class="container-fluid">
                <div class="row p-5 fondo">
                    <div class="col-12 col-4 align-self-center">
                        <img src="https://firebasestorage.googleapis.com/v0/b/spotyja-9de98.appspot.com/o/logoDist.png?alt=media&token=58c01cc5-39b3-40ed-9f94-221461605dbb" alt="foto del logo" class="img-fluis w-100"/>
                    </div>
                    <div class="col-12 col-md-4 text-center">
                        <h2 class="fw-bold">SOBRE LA BANDA</h2>
                        <h4>Banda de heavy metal y metal</h4>
                        <br/>
                        <h2 class="fw-bold">SOBRE LA BANDA</h2>
                        <h4>Banda de hard rock y metal</h4>
                    </div>
                    <div class="col-12 col-4">
                        <i class="bi bi-youtube fuente  me-5"></i>
                        <i class="bi bi-youtube fuente  me-5"></i>
                        <i class="bi bi-twitter fuente me-5"></i>
                        <i class="bi bi-youtube fuente  "></i>
                    </div>
                </div>
            </div>
        </footer>

    )
}