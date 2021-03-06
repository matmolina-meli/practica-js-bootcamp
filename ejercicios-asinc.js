// Ejercicios del Modulo 5 de la Clase 1 repasando JS

// Como detalle seguramente voy a volver a ver el codigo para crear funciones reutilizables
// Porque tengo instancias donde tengo funciones que son practicamente iguales.

function CuentaBancaria(nombreTit, numeroCuenta, apellidoTit) {
    this.nombreTit = nombreTit,
    this.apellidoTit = apellidoTit,
    this.numeroCuenta = numeroCuenta,
    // Datos Debito
    this.saldo = 0,
    this.movimientos = [],
    // Datos Credito
    this.saldoCredito = 0,
    this.movimientosCredito = [],
    // Movimientos Totales
    this.movimientosDebitadoTotal = 0,
    this.movimientosAcreditadoTotal = 0,

    this.consultarTitular = () => this.nombreTit + ' ' + this.apellidoTit;

    // Metodos Debito
    this.debitarDineroDebito = (aDebitar) => {
        if (this.saldo > aDebitar) {
            this.movimientos.push('Se debito ' + aDebitar)
            this.saldo -= aDebitar;
            this.movimientosDebitadoTotal -= aDebitar;
            return 'Se debito $' + aDebitar;
        } else {
            return 'Saldo insuficiente para hacer esta operacion';
        }
    }

    this.ingresoDineroDebito = (agregar) => {
        this.movimientos.push('Se deposito $ ' + agregar)
        this.saldo += agregar;
        this.movimientosAcreditadoTotal += agregar;
        return 'Se deposito $' + agregar;
    }

    this.verHistorialDebito = () => this.movimientos;

    this.verSaldoDebito = () => this.saldo;

    // Metodos Credito
    this.debitarDineroCredito = (aDebitar) => {
        if (this.saldoCredito > aDebitar) {
            this.movimientos.push('Se debito ' + aDebitar)
            this.saldo -= aDebitar;
            this.movimientosDebitadoTotal -= aDebitar;
            return 'Se debito $' + aDebitar;
        } else {
            return 'Saldo insuficiente para hacer esta operacion';
        }
    }

    this.ingresoDineroCredito = (agregar) => {
        this.movimientos.push('Se deposito $ ' + agregar)
        this.saldoCredito += agregar;
        this.movimientosAcreditadoTotal += agregar;
        return 'Se deposito $' + agregar;
    }

    this.verHistorialCredito = () => this.movimientosCredito;

    this.verSaldoCredito = () => this.saldoCredito;

    // Totales
    this.movimientosTotales = () => {
        return `Acreditado total: ${this.movimientosAcreditadoTotal}, Debitado total ${this.movimientosDebitadoTotal}`
    }
};

// Cuentas

let miCuenta = new CuentaBancaria('Mateo', 02021, 'Molina',);
let cuentaPepe = new CuentaBancaria('Pepe', 292827, 'Pepito',)
let cuentaNancy = new CuentaBancaria('Nancy', 696969, 'Sinatra',)


// Ejecucion
console.log(miCuenta)
console.log(miCuenta.ingresoDineroDebito(300))
console.log(miCuenta.verHistorialDebito())
console.log(miCuenta.debitarDineroDebito(250))
console.log(miCuenta.verHistorialDebito())