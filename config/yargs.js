const argv= require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',//Tipo del dato que se debe ingresar por consola
        demandOption: true,//Hacer que el dato sea obligatorio
        describe: "Es la base de la tabla de multiplicar"//Describe la utilidad del dato
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: "Muestra la tabla en consola"
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        demandOption: false,
        default: 10,
        describe: "Numero al que llega la tabla de multiplicar"
    })
    .check((argv, options) => {//Permite hacer validaciones
        if(isNaN(argv.b)){//Si el dato ingresado no es un numero
            throw 'La base tiene que ser un numero'//muestra el mensaje
        }
        if(isNaN(argv.h)){
            throw 'hasta tiene que ser un numero'
        }
        return true //Si no hay error devulve que todo esta bien
    })
    .argv;

    module.exports= argv;//Como en este archivo argv es lo unico que vamos a tener no hace falta crear un objeto
    //Para hacer la exportacion, de esta manera es mas facil y eficiente