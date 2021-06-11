const {crearArchivoPromise, crearArchivoasync} = require('./helpers/multiplicar.js');
const argv= require('./config/yargs');

const color= require('colors');


console.clear();

console.log(color.brightRed("Author: Maquino"));
console.log(argv);
console.log(color.brightYellow('base: yargs', argv.base));

// console.log(process.argv);
// const [,,arg3= 'base=5']= process.argv;
// const [,base]= arg3.split('=');//la funcion split hace que la constante se divida en dos

crearArchivoPromise(argv.b, argv.l, argv.h)
    .then((archivo)=> console.log(color.bgWhite.brightMagenta(archivo.rainbow, 'creado')))
    .catch((err)=> console.log(err))