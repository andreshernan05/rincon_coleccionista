const tableBody = document.querySelector("table tbody")
const importeTotalCarrito = document.querySelector("td#importeTotalCarrito")
const modal = document.getElementById("modal")
const modalImg = document.getElementById("modal-img")
const span = document.getElementsByClassName("close")[0]
const btnComprar = document.querySelector("button#btnComprar")
const carrito = JSON.parse(localStorage.getItem("ordenCompra")) || []


function ajustarRutaImagen(imagen) {
    if (!imagen.startsWith('../')) {
        return `../${imagen}`
    }
    return imagen
}

function armarTablaCarrito(autito) {
    const imagenAjustada = ajustarRutaImagen(autito.imagen)
    return `<tr>
                <td class="imagen-carrito"><img src="${imagenAjustada}" alt="${autito.nombre}" onclick="mostrarImagen('${imagenAjustada}')"></td>
                <td>${autito.nombre}</td>
                <td>$ ${autito.precio.toLocaleString("es-AR")}</td>
                <td><button class="btnQuitar" id="btnQuitar">❌</button></td>
                
            </tr>`
}

function cargarProductosDelCarrito() {
    tableBody.innerHTML = ""
    if (carrito.length > 0) {
        carrito.forEach((autito) => tableBody.innerHTML += armarTablaCarrito(autito))
        calcularTotalCarrito()
        eliminarProductos()
    }
}

function calcularTotalCarrito() {
    if (carrito.length > 0) {
        let montoTotalCarrito = carrito.reduce((acc, autito) => acc + autito.precio, 0)
        importeTotalCarrito.textContent = `$ ${montoTotalCarrito.toLocaleString("es-AR")}`
    }
}

function eliminarProductos() {
    const quitar = document.querySelectorAll(".btnQuitar")
    quitar.forEach((boton) => {
        boton.addEventListener("click", () => {
            const index = boton.getAttribute('data-index')
            carrito.splice(index, 1)
            localStorage.setItem('ordenCompra', JSON.stringify(carrito))
            cargarProductosDelCarrito()

            if (carrito.length === 0) {
                Swal.fire({
                    title: "Carrito vacío",
                    text: "No hay más productos en el carrito.",
                    text: "Sera direccionado a la pagina principal.",
                    icon: "info",
                    confirmButtonText: "OK",

                }).then((result) => {
                    if (result.isConfirmed) {
                        setTimeout(() => {
                            window.location.href = '../index.html';
                        }, 1500)

                    }
                })
                importeTotalCarrito.textContent = "$0"
            }
        })
    })
}


function realizarCompra() {

    Swal.fire({
        title: "Rincon del Coleccionista",
        text: "Su compra fue realizada con Exito",
        icon: "success"
    }).then((result) => {
        if (result.isConfirmed) {
            localStorage.removeItem('ordenCompra');
            setTimeout(() => {
                window.location.href = '../index.html';
            }, 1500);

        }
    })
}

//EVENTOS

btnComprar.addEventListener("click", realizarCompra)

cargarProductosDelCarrito() // Función principal
