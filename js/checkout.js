const tableBody = document.querySelector("table tbody")
const importeTotalCarrito = document.querySelector("td#importeTotalCarrito")
const modal = document.getElementById("modal")
const modalImg = document.getElementById("modal-img")
const span = document.getElementsByClassName("close")[0]

const carrito = JSON.parse(localStorage.getItem("ordenCompra")) || []

function calcularTotalCarrito() {
    if (carrito.length > 0) {
        let montoTotalCarrito = carrito.reduce((acc, prod) => acc + prod.precio, 0)
        importeTotalCarrito.textContent = `$ ${montoTotalCarrito.toLocaleString("es-AR")}`
    }
}

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
                <td class="quitar-carrito" title="Clic para quitar del carrito">❌</td>
            </tr>`
}

function cargarProductosDelCarrito() {
    tableBody.innerHTML = ""
    if (carrito.length > 0) {
        carrito.forEach((autito) => tableBody.innerHTML += armarTablaCarrito(autito))
        calcularTotalCarrito()
    }
}

function mostrarImagen(src) {
    modal.style.display = "block"
    modalImg.src = src
}

span.onclick = function () {
    modal.style.display = "none"
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none"
    }
}

cargarProductosDelCarrito() // Función principal