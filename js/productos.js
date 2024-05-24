function crearid() {
    return parseInt(Math.random() * 1000)
}

const autitos = [
    { codart: crearid(), nombre: '68 Ford Mustang', imagen: './assets/img/autos/68 Ford Mustang.webp', precio: 4000, categoria: 'autos' },
    { codart: crearid(), nombre: 'Mercedes Clk DTM', imagen: './assets/img/autos/20230408_124305.webp', precio: 8000, categoria: 'autos' },
    { codart: crearid(), nombre: 'Panoz LMP 1 Roadsters', imagen: './assets/img/autos/Panoz LMP1 Roadsters.webp', precio: 3500, categoria: 'autos' },
    { codart: crearid(), nombre: '32 Ford Delivery', imagen: './assets/img/autos/Ford 32 Delivery2.webp', precio: 5000, categoria: 'autos' },
    { codart: crearid(), nombre: '32 Ford Delivery', imagen: './assets/img/autos/Ford 32 Delivery.webp', precio: 5500, categoria: 'autos' },
    { codart: crearid(), nombre: 'Ford Mustang Mach1', imagen: './assets/img/autos/Mustang Mach.webp', precio: 4000, categoria: 'autos' },
    { codart: crearid(), nombre: 'Ford Gt40', imagen: './assets/img/autos/Ford Gt40.webp', precio: 6500, categoria: 'autos' },
    { codart: crearid(), nombre: '1956 Corvette', imagen: './assets/img/autos/1956 Corvette.webp', precio: 10000, categoria: 'autos' },
    { codart: crearid(), nombre: 'Jaguar XJ220', imagen: './assets/img/autos/20230408_140058.webp', precio: 7500, categoria: 'autos' },
    { codart: crearid(), nombre: 'Renault 5 Turbo', imagen: './assets/img/autos/20230408_135128.webp', precio: 8500, categoria: 'autos' },
]

const pagos = [
    { id: 0, opcion: 'Efectivo', recargo: 0 },
    { id: 1, opcion: 'Debito', recargo: 0 },
    { id: 2, opcion: '1 Cuotas', recargo: '1%' },
    { id: 3, opcion: '3 Cuotas', recargo: '3%' },
    { id: 4, opcion: '6 Cuotas', recargo: '5%' },
    { id: 5, opcion: 'Transferencia', recargo: 0 }

]
