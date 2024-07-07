const carrito = JSON.parse(localStorage.getItem("ordenCompra")) || []

const contCarrito = document.getElementById("contador__carrito")
const imgCarrito = document.getElementById("logoCarrito")
const buscador = document.querySelector("input#buscador")
const radios = document.querySelectorAll("input[type=radio]")
const autitos = []
const URLproductos = "https://668733660bc7155dc016f24e.mockapi.io/autitos"

function principal() {
    obtenerProductos()
    contadorCarrito()
    filtros()
}

function obtenerProductos() {
    fetch(URLproductos)
        .then((response) => response.json())
        .then((datos) => autitos.push(...datos))
        .then(() => carga__articulos(autitos))
        .then(() => enableBtn())
        .catch((error) => {
            console.error(error)
        })
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
            break;

        case 4:
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "En estos momentos no contamos con stock de dichos productos",
                confirmButtonText: "Aceptar"
            }).then(() => {
                radios.checked = false;
                const defaultRadio = document.querySelector('input[type="radio"][value="all"]');
                if (defaultRadio) {
                    defaultRadio.checked = true;
                }
                principal()
            })
            break;

        case 5:
            Swal.fire({
                title: "Marca",
                text: "Proximamente",
                icon: "info",
                confirmButtonColor: '#318aac',
                confirmButtonText: 'Aceptar'
            })
            break;

        case 6:
            Swal.fire({
                title: "Contacto",
                text: "Proximamente",
                icon: "info",
                confirmButtonColor: '#318aac',
                confirmButtonText: 'Aceptar'
            })
            break;

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

    radios.forEach((radio) => {
        radio.addEventListener("click", () => {
            if (radio.value === "sth") {
                let resultado = autitos.filter((autito) => autito.tipo === radio.value)
                if (resultado.length === 0) {
                    mensajes(4)

                } else {
                    carga__articulos(resultado)
                    enableBtn()

                }
            } else {
                if (radio.value === "th") {
                    let resultado = autitos.filter((autito) => autito.tipo === radio.value)
                    if (resultado.length === 0) {
                        mensajes(4)

                    } else {
                        carga__articulos(resultado)
                        enableBtn()

                    }
                } else {
                    if (radio.value === "cyp") {
                        let resultado = autitos.filter((autito) => autito.tipo === radio.value)
                        if (resultado.length === 0) {
                            mensajes(4)

                        } else {
                            carga__articulos(resultado)
                            enableBtn()

                        }
                    } else {
                        carga__articulos(autitos)
                    }
                }
            }
        })
    })
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


document.addEventListener('DOMContentLoaded', function () {
    const opcionesNavbar = document.querySelectorAll('.navsw');

    // Recorrer cada opción y agregar un listener de clic
    opcionesNavbar.forEach(opcion => {
        opcion.addEventListener('click', function (e) {
            e.preventDefault(); // Evitar el comportamiento por defecto del enlace

            // Obtener el texto del enlace clicado
            const opcionTexto = opcion.textContent.trim();

            // Mostrar SweetAlert según la opción clicada
            switch (opcionTexto) {
                case 'Marcas':
                    mensajes(5)
                    break;
                case 'Contacto':
                    mensajes(6)
                    break;
                default:
                    // Por si acaso, aunque no debería pasar en este ejemplo
                    console.log('Opción no reconocida');
            }
        });
    });
});

// FUNCION PRINCIPAL
principal()

