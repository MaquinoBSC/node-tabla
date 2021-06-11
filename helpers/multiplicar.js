const colors= require('colors');
const fs= require('fs');

// const crearArchivo= (base)=> {
//     console.log('=======================================');
//     console.log('            Tabla del:', base);
//     console.log('=======================================');

//     let salida= '';

//     for(let i=1; i<=10; i++){
//         salida+= `${base} x ${i} = ${base*i}\n`;
//     }
//     console.log(salida);

//     fs.writeFile(`tabla-${base}.txt`, salida, (err)=> {
//         if(err) throw err;

//         console.log("Archivo creado!! :)");
//     });
//     fs.writeFileSync(`tablaSync-${base}.txt`, salida);
//     console.log("Archivo con sync, creado!!");
// }

const crearArchivoPromise= (base, listar, hasta)=> {

    if(listar){
        console.log(colors.america('======================================='));
        console.log(colors.bgMagenta.white('            Tabla del:', base, '              '));
        console.log(colors.rainbow('======================================='));
    }
    let salida= '';

    return new Promise((resolve, reject)=> {
        for(let i=1; i<=hasta; i++){
            listar && console.log(colors.bgYellow(base + ' x '.red + i + ' = '.red + i*base));
            salida+= base + ' x ' + i + ' = ' + i*base + '\n';
        }
    
        fs.writeFile(`./salida/tabla-${base}.txt`, salida, (err)=> {
            if(err) {
                reject(err)
                throw err;
            }
    
            resolve(`tabla-${base}.txt`);
        });
    })
}

//async por default regresa una promesa
const crearArchivoasync= async(base)=> {
    console.log('=======================================');
    console.log('            Tabla del:', base);
    console.log('=======================================');
    let salida= '';

    
    for(let i=1; i<=10; i++){
        salida+= `${base} x ${i} = ${base*i}\n`;
    }
    console.log(salida);

    fs.writeFile(`tabla-${base}.txt`, salida, (err)=> {
        if(err) {
            reject(err)
            throw err;
        }

    });
    return(`tabla-${base}.txt`);
}

module.exports= {//Es un objeto, pero deado que ECMAscript lo permite, si la clave y el valor tiene el mismo nombre, podemos ponerlo solo una vez
    crearArchivoPromise,
    crearArchivoasync,
}