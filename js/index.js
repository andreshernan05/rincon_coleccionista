const carrito = []
const contCarrito = document.getElementById("contador__carrito")
const imgCarrito = document.getElementById("carrito")
const buscador = document.querySelector("input#buscador")
const filtroRadio = document.querySelector("input#filtros__radial")

function principal() {
    carga__articulos(autitos)
    enableBtn()
}

function contadorCarrito() {
    contCarrito.textContent = carrito.length
}

function enableBtn() {
    const bntadd = document.querySelectorAll("button.boton")

    if (bntadd.length > 0) {
        bntadd.forEach((boton) => {
            boton.addEventListener("click", () => {
                const prodselect = autitos.find((autito) => autito.codart == boton.codart)
                carrito.push(prodselect)
                contadorCarrito()
            })
        })
    }
}
// CREACION DE CARDS

function card__html(autito) {
    return `<div class="div__card">
                <figure class="imghvr-zoom-out car__cards">
                    <img src="${autito.imagen}">
                    <figcaption>
                        <h3>${autito.nombre}</h3>
                        <h4>$${autito.precio}</h4>
                        <div>
                            <button id:"${autito.codart}" class="add-btn boton">Agregar a Carrito</button>
                        </div>
                    </figcaption>
                    
                </figure>
            </div>`
}

function carga__articulos(autitos) {
    if (autitos.length > 0) {
        container__cards.innerHTML = ""
        autitos.forEach((autito) => container__cards.innerHTML += card__html(autito))
    }
}

/*filtroRadio.addEventListener("click", (e)=>{
    switch (filtroRadio.value){
        case "sth":
            let dbSth = autitos.filter((autito)=>autito.)
    }
})*/

// EVENTOS 
buscador.addEventListener("keydown", (e) => {
    let resultado = autitos.filter((autito) => autito.nombre.toLowerCase().includes(buscador.value.toLowerCase()))
    carga__articulos(resultado)
})



// FUNCION PRINCIPAL
principal()
