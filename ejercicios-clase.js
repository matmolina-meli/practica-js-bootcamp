function Computadora (ram, cpu, disco, monitor, gpu) {
    this.ram = ram,
    this.cpu = cpu,
    this.disco = disco,
    this.monitor = monitor,
    this.gpu = gpu
}

let compus = [];
compus.push(new Computadora('ram1', 'cpu1', 'disco1', 'monitor1', false));
compus.push(new Computadora('ram2', 'cpu2', 'disco2', 'monitor2', true));
compus.push(new Computadora('ram3', 'cpu3', 'disco3', 'monitor3', false));
compus.push(new Computadora('ram4', 'cpu4', 'disco4', 'monitor4', true));
compus.push(new Computadora('ram5', 'cpu5', 'disco5', 'monitor5', false));


compus.forEach(item => {
    return item
});

let compusTrue = compus.filter(item => item.gpu);

// Ejercicio 4
let litros;
function gastoPorKm(distanciaKm) {
    litros = distanciaKm / 100 * 2;
    return litros
};

// console.log(gastoPorKm(1200));

let precioNafta = 25;
function precioViaje(precioNafta) {
    return litros * precioNafta;
}

// console.log(precioViaje(precioNafta))

// Ejercicio 5

const listaNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numerosMultiplicados = listaNumeros.map(x => x * 2);

// Ejercicio 6

const numeroMayorA = listaNumeros.filter(item => item > 5)

// Ejercicio 7

const primerNumero = numeroMayorA.find(numero => numero > 10)

// Ejercicio 8

let pokemones = [ 
    { nombre: 'pikachu', poder: 12 },
    { nombre: 'bulbasaur', poder: 6 },
    { nombre: 'charizard', poder: 19 },
    { nombre: 'squirtle', poder: 3 },
    { nombre: 'metwo', poder: 6 }, 
];

const pokemonesFiltrados = pokemones.filter(pokemon => pokemon.poder > 10);