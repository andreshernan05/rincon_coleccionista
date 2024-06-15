const tableBody = document.querySelector("table tbody")
const importeTotalCarrito = document.querySelector("td#importeTotalCarrito")
const modal = document.getElementById("modal")
const modalImg = document.getElementById("modal-img")
const span = document.getElementsByClassName("close")[0]
const btnComprar = document.querySelector("button#btnComprar")
const carrito = JSON.parse(localStorage.getItem("ordenCompra")) || []

function calcularTotalCarrito() {
    if (carrito.length > 0) {
        let montoTotalCarrito = carrito.reduce((acc, autito) => acc + autito.precio, 0)
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

function realizarCompra() {
    const mensajeCompra = document.createElement("div")
    mensajeCompra.id = "mensajeCompra"
    mensajeCompra.innerHTML = `
        <div class="modal-content">
            <span class="close" id="closeModal">&times;</span>
            <p>La compra se realizó correctamente.</p>
            <button id="volverAlInicio">Volver al inicio</button>
        </div>
    `
    document.body.appendChild(mensajeCompra)

    // Estilo para el modal
    const estiloModal = document.createElement("style")
    estiloModal.innerHTML = `
        #mensajeCompra {
            display: block;
            position: fixed;
            z-index: 1000;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            overflow: auto;
            background-color: rgba(0, 0, 0, 0.4);
        }
        .modal-content {
            background-color: #fefefe;
            margin: 15% auto;
            padding: 20px;
            border: 1px solid #888;
            width: 80%;
            max-width: 300px;
            text-align: center;
        }
        .close {
            color: #aaa;
            float: right;
            font-size: 28px;
            font-weight: bold;
        }
        .close:hover,
        .close:focus {
            color: black;
            text-decoration: none;
            cursor: pointer;
        }
        #volverAlInicio {
            background-color: #4CAF50;
            color: white;
            padding: 10px 20px;
            border: none;
            cursor: pointer;
        }
        #volverAlInicio:hover {
            background-color: #45a049;
        }
    `
    document.head.appendChild(estiloModal)

    // Event listener para cerrar el modal
    document.getElementById("closeModal").onclick = function () {
        document.getElementById("mensajeCompra").remove()
        estiloModal.remove()
    }

    // Event listener para volver al inicio
    document.getElementById("volverAlInicio").onclick = function () {
        localStorage.removeItem("ordenCompra")
        window.location.href = "../index.html"
    }

}

//EVENTOS

btnComprar.addEventListener("click", realizarCompra)

cargarProductosDelCarrito() // Función principal