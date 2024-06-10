function crearid() {
    return parseInt(Math.random() * 1000)
}

const autitos = [
    { codart: crearid(), nombre: '68 Ford Mustang', imagen: './assets/img/autos/68 Ford Mustang.webp', precio: 4000, categoria: 'autos', anio: `2001`, tipo: `basico` },
    { codart: crearid(), nombre: 'Mercedes Clk DTM', imagen: './assets/img/autos/20230408_124305.webp', precio: 8000, categoria: 'autos', anio: `2010`, tipo: `basico` },
    { codart: crearid(), nombre: 'Panoz LMP 1 Roadsters', imagen: './assets/img/autos/Panoz LMP1 Roadsters.webp', precio: 3500, categoria: 'autos', anio: `2008`, tipo: `basico` },
    { codart: crearid(), nombre: '32 Ford Delivery', imagen: './assets/img/autos/Ford 32 Delivery2.webp', precio: 5000, categoria: 'autos', anio: `2002`, tipo: `basico` },
    { codart: crearid(), nombre: '32 Ford Delivery', imagen: './assets/img/autos/Ford 32 Delivery.webp', precio: 5500, categoria: 'autos', anio: `2003`, tipo: `basico` },
    { codart: crearid(), nombre: 'Ford Mustang Mach1', imagen: './assets/img/autos/Mustang Mach.webp', precio: 4000, categoria: 'autos', anio: `2005`, tipo: `basico` },
    { codart: crearid(), nombre: 'Ford Gt40', imagen: './assets/img/autos/Ford Gt40.webp', precio: 6500, categoria: 'autos', anio: `2021`, tipo: `basico` },
    { codart: crearid(), nombre: '1956 Corvette', imagen: './assets/img/autos/1956 Corvette.webp', precio: 10000, categoria: 'autos', anio: `2023`, tipo: `basico` },
    { codart: crearid(), nombre: 'Jaguar XJ220', imagen: './assets/img/autos/20230408_140058.webp', precio: 7500, categoria: 'autos', anio: `1995`, tipo: `basico` },
    { codart: crearid(), nombre: 'Renault 5 Turbo', imagen: './assets/img/autos/20230408_135128.webp', precio: 8500, categoria: 'autos', anio: `1996`, tipo: `basico` },
    { codart: crearid(), nombre: '1967 Pontiac Gto', imagen: './assets/img/autos/1967 Pontiac GTO (2005-128).webp', precio: 25000, categoria: 'autos', anio: `2005`, tipo: `sth` },
    { codart: crearid(), nombre: '2015 Ford Mustang Gt', imagen: './assets/img/autos/2015 Forc Mustang Gt (2018).webp', precio: 28000, categoria: 'autos', anio: `2018`, tipo: `sth` },
    { codart: crearid(), nombre: 'Chaparral 2', imagen: './assets/img/autos/Chaparral 2 (2000-055).webp', precio: 15000, categoria: 'autos', anio: `2000`, tipo: `sth` },
    { codart: crearid(), nombre: 'Corvette Grand Sport Roaster', imagen: './assets/img/autos/Corvette Grand Sport Roaster (2017-052).webp', precio: 35000, categoria: 'autos', anio: `2017`, tipo: `sth` },
    { codart: crearid(), nombre: 'Cruiser Bruiser', imagen: '/assets/img/autos/Cruiser Bruiser (2016).webp', precio: 20000, categoria: 'autos', anio: `2016`, tipo: `sth` },
    { codart: crearid(), nombre: 'Custom 59 Cadillac', imagen: './assets/img/autos/Custom 59 Cadillac (2006-042).webp', precio: 35000, categoria: 'autos', anio: `2006`, tipo: `sth` },
    { codart: crearid(), nombre: 'Ford 56', imagen: './assets/img/autos/Ford 56.webp', precio: 28000, categoria: 'autos', anio: `2008`, tipo: `sth` },
    { codart: crearid(), nombre: 'Nissan Skyline 2000', imagen: './assets/img/autos/Nissan Skyline 2000 (2018).webp', precio: 22000, categoria: 'autos', anio: `2018`, tipo: `sth` },
    { codart: crearid(), nombre: 'Phaeton', imagen: './assets/img/autos/Phaeton (2002-007).webp', precio: 32000, categoria: 'autos', anio: `2002`, tipo: `sth` },
    { codart: crearid(), nombre: 'Street Creeper', imagen: './assets/img/autos/Street Creeper (2019-203).webp', precio: 18500, categoria: 'autos', anio: `2019`, tipo: `sth` },
    { codart: crearid(), nombre: 'Super Smooth', imagen: './assets/img/autos/Super Smooth (2004-105).webp', precio: 27500, categoria: 'autos', anio: `2004`, tipo: `sth` },
    { codart: crearid(), nombre: 'volkwagen T2 Pickup', imagen: './assets/img/autos/Volkswagen T2 Pickup (2019-096).webp', precio: 28500, categoria: 'autos', anio: `2019`, tipo: `sth` },
]

const pagos = [
    { id: 0, opcion: 'Efectivo', recargo: 0 },
    { id: 1, opcion: 'Debito', recargo: 0 },
    { id: 2, opcion: '1 Cuotas', recargo: '1%' },
    { id: 3, opcion: '3 Cuotas', recargo: '3%' },
    { id: 4, opcion: '6 Cuotas', recargo: '5%' },
    { id: 5, opcion: 'Transferencia', recargo: 0 }

]
