const carrito = []

function principal() {
    let opcion = parseInt(prompt("¿Que desea hacer? \n 1- Ver Productos \n 2- Comprar \n 3- Ver formas de pago \n 4- Ver Carrito \n 5- Salir "))

    if (opcion <= 5) {
        switch (opcion) {
            case 1:
                verProductos()
                principal()
                break

            case 2:
                verProductos()
                comprar()
                break

            case 3:
                pago()
                principal()
                break

            case 4:
                compraspendientes()
                break

            case 5:
                salir()
                break

        } // LLAVE DE CIERRE SWITCH
    } // LLAVE DE CIERRE IF
}
// OPCION 1 VER PRODUCTOS
function verProductos() {
    console.table(autitos)
}// OPCION 1 VER PRODUCTOS

//OPCION 2 COMPRAR
function buscarproducto(codigo) {
    let artelegico = autitos.find((auto) => auto.codart === codigo)
    return artelegico
}
function comprar() {
    let codigo = parseInt(prompt("Ingrese el codigo del producto \n ingrese cero para finalizar la compra"))
    if (codigo != 0) {
        let prodelegido = buscarproducto(codigo)
        if (prodelegido === undefined) {
            alert("No se encontro el producto seleccionado")
            comprar()
        } else {
            carrito.push(prodelegido)
            let rta = confirm("¿Desea comprar otro producto?")
            if (rta === true) {
                comprar()
            } else {
                principal()
            }
        }
    } else {
        principal()
    }
}//OPCION 2 COMPRAR

//OPCION 3 VER FORMA DE PAGOS
function pago() {
    console.table(pagos)
}//OPCION 3 VER FORMA DE PAGOS

//OPCION 4 VER CARRITO
function subtotal() {
    if (carrito.length > 0) {
        return carrito.reduce((acc, autito) => acc + autito.precio, 0)
    }
}
function compraspendientes() {
    console.table(carrito)
    console.log(" El total a pagar es de: $" + subtotal())

}//OPCION 4 VER CARRITO

//OPCION 5 SALIR
function salir() {
    let rta = confirm("¿Desea Salir?")
    if (rta === true) {
        alert("Gracias por su visita, vuelva pronto")
    } else {
        principal()
    }
}//OPCION 5 SALIR

// CREACION DE CARDS

function card__html(autito) {
    return `<div class="div__card">
                <figure class="imghvr-zoom-out car__cards">
                    <img src="${autito.imagen}">
                    <figcaption>
                        <h3>${autito.nombre}</h3>
                        <h4>${autito.precio}</h4>
                    </figcaption>
                </figure>
            </div>`
}

function carga__articulos() {
    if (autitos.length > 0) {
        container__cards.innerHTML = ""
        autitos.forEach((autito) => container__cards.innerHTML += card__html(autito))
    }
}

carga__articulos()