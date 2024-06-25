const carrito = JSON.parse(localStorage.getItem("ordenCompra")) || []
const contCarrito = document.getElementById("contador__carrito")
const imgCarrito = document.getElementById("logoCarrito")
const buscador = document.querySelector("input#buscador")
const filtroRadio = document.querySelector("input#filtros__radial")

function principal() {
    carga__articulos(autitos)
    enableBtn()
    contadorCarrito()
}

function mensajes(op) {
    switch (op) {
        case 1:
            Swal.fire({
                title: "Rincon del Coleccionista",
                text: "Debe de elegir al menos un producto para continuar",
                icon: "warning"
            });
            break;

        case 2:
            Swal.fire({
                title: "Rincon del Coleccionista",
                text: "Su compra fue realizada con Exito",
                icon: "success"
            });
            break;

        case 3:
            Toastify({
                text: "Producto agregado al carrito",
                duration: 1500,
                close: true,
            }).showToast();
    }
}

function contadorCarrito() {
    contCarrito.textContent = carrito.length
}

function enableBtn() {
    const bntadd = document.querySelectorAll("button.boton")
    if (bntadd.length > 0) {
        bntadd.forEach((boton) => {
            boton.addEventListener("click", () => {
                const prodselect = autitos.find((autito) => autito.codart == boton.id)
                carrito.push(prodselect)
                contadorCarrito()
                localStorage.setItem("ordenCompra", JSON.stringify(carrito))
                mensajes(3)
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
                            <button id="${autito.codart}" class="add-btn boton">Agregar a Carrito</button>
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

function filtros() {
    const filtroSeleccionado = document.querySelector("input[name='filtro']:checked").value;
    let resultado;
    if (filtroSeleccionado === "sth") {
        resultado = autitos;
    } else {
        resultado = autitos.filter((autito) => autito.tipo === filtroSeleccionado);
    }
    carga__articulos(resultado);
    enableBtn()
}

// EVENTOS 
buscador.addEventListener("keydown", (e) => {
    let resultado = autitos.filter((autito) => autito.nombre.toLowerCase().includes(buscador.value.toLowerCase()))
    carga__articulos(resultado)
    enableBtn()
})

imgCarrito.addEventListener("click", () => {
    if (carrito.length > 0) {
        location.href = "./pages/checkout.html"
    } else {
        mensajes(1)
    }
})

filtroRadio.addEventListener("change", filtros)


// FUNCION PRINCIPAL
principal()




