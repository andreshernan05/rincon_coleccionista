// FUNCION PRINCIPAL

function consultaPrecio() {
    let rta = confirm("Desea conocer nuestros precios? 💲💲")
    if (rta === true) {
        opcion()
    } else {
        console.log("Gracias por su visita 🙋🏽‍♂️")
    }
}
// FUNCION 2

function opcion() {
    let opcion = 0
    opcion = prompt("Por favor por favor elija alguna opcion \n 1- 🚗 Autos \n 2- 🚜 Maquinaria Agricola \n 3- 🚚 Camiones \n 4- 🏍 Motocicletas \n 5- ✈ Aviones")
    if (opcion > 0 && opcion <= 5) {
        precios(parseInt(opcion))
    } else {
        console.error("La opcion elegida es incorrecta.")
    }
}

//FUNCION 3

function precios(codigo) {
    let modelo = ""
    switch (codigo) {
        case 1:
            modelo = confirm("El valor de los autitos es: 💲4000. \n Desea conocer los modelos disponibles?")
            if (modelo === true) {
                informacion(1)
            } else {
                console.log("Gracias por su visita 🙋🏽‍♂️")
            }
            break;

        case 2:
            modelo = confirm("El valor de las maquinas agrarias es: 💲6000. \n Desea conocer los modelos disponibles?")
            if (modelo === true) {
                informacion(2)
            } else {
                console.log("Gracias por su visita 🙋🏽‍♂️")
            }
            break;

        case 3:
            modelo = confirm("El valor de los camioncitos es: 💲5000. \n Desea conocer los modelos disponibles?")
            if (modelo === true) {
                informacion(3)
            } else {
                console.log("Gracias por su visita 🙋🏽‍♂️")
            }
            break;

        case 4:
            modelo = confirm("El valor de las motos es: 💲3500. \n Desea conocer los modelos disponibles?")
            if (modelo === true) {
                informacion(4)
            } else {
                console.log("Gracias por su visita 🙋🏽‍♂️")
            }
            break;

        case 5:
            modelo = confirm("El valor de los aviones es: 💲4500. \n Desea conocer los modelos disponibles?")
            if (modelo === true) {
                informacion(5)
            } else {
                console.log("Gracias por su visita 🙋🏽‍♂️")
            }
            break;
    }
}

// FUNCION 4

function informacion(codigo) {
    switch (codigo) {
        case 1:
            console.log(" 1 Ford Gt 40")
            console.log(" 2 Bugatti Veiron")
            console.log(" 3 Dodge Challenger")
            console.log(" 4 Vw Pick up T2")
            console.log(" 5 Porsche GT3")
            conocerPagos()
            break;

        case 2:
            console.log(" 1 Tractores")
            console.log(" 2 Cosechadora")
            console.log(" 3 Sembradoras")
            conocerPagos()
            break;

        case 3:
            console.log(" 1 Scania")
            console.log(" 2 Volvo")
            conocerPagos()
            break;

        case 4:
            console.log(" 1 Yamaha")
            console.log(" 2 Ducatti")
            console.log(" 3 Harley Davinson")
            conocerPagos()
            break;

        case 5:
            console.log(" 1 Boeing 747")
            console.log(" 2 Caza F17")
            console.log(" 3 Hercules")
            conocerPagos()
            break;
    }

}

//FUNCION 5

function conocerPagos() {
    let conocer = confirm("Desea conocer nuestras formas de pago?")
    if (conocer === true) {
        pagos()
    } else {
        console.log("Gracias por su visita 🙋🏽‍♂️")
    }
}

// FUNCION 6

function pagos() {
    let ok = confirm("Aceptamos: \n 💵 Efectivo \n 💳 Tarjetas \n 🏦 Trasnferencias")

    alert("Interes en pagos con tarjeta ")
    let interes = 1
    for (let i = 1; i < 7; i++) {
        if (i <= 3) {
            console.log("En " + i + " cuota sin interes")
        } else {
            console.log("En " + i + " cuotas el interes es de " + interes + "%")
            interes++
        }
    }
}

function crearid() {
    return parseInt(Math.random() * 1000)
}

function comprar() {
    let sumaaux = 0;
    const listaprod = [];

    let id = parseInt(prompt("ingrese el codigo del producto deseado \n Ingrese 0 para finalizar la compra"))

    let producto = autitos.find(autito => autito.id === id);
    listaprod.push(producto)
    sumaaux += producto.precio
    let rta = confirm("desea cargar otro producto?")

    if (rta === true) {
        comprar()
    }
}
le escribi

function verproductos() {
    console.table(autitos)
}