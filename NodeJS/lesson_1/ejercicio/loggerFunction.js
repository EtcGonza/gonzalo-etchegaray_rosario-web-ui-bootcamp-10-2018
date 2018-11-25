const fs = require('fs'); // Incluyo el modulo File System.

const fileExists = (file, msg) => {
    fs.exists(file, (exists) => {
        if (exists) { // Si el archivo existe lee el archivo.
            console.log('El archivo existe');
            append(file, msg);
            read(file); // Funcion que toma un archivo y lee su contenido.
        } else { // El Archivo no existe llama a funcion Create y crea el archivo.
            console.log('El archivo no existe');
            createFile(file, read, msg); // Funcion que toma dos argumentos, la ruta del archivo y una funcion para leer el archivo.
        }
    });
}

const readFile = (file, callback) => {
    fs.readFile(file, callback);
}

function read(error, data) {
    if (error) {
        return console.error(error);
    } else {
        console.log("Lectura", JSON.parse(data));
    }
}

function append(file, msg) {
    fs.appendFileSync(file, msg);
}

const createFile = (file, callback, res) => {
    console.log("Creando Archivo.");
    fs.writeFile(file, res, (error) => {
        if (error) {
            return console.error("Error" + error);
        }
        callback(file);
    });
}

module.exports.fileExists = fileExists;