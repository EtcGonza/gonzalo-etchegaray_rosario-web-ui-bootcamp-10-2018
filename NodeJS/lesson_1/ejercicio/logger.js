const fs = require('fs'); // Incluyo el modulo File System.
const argv = require('yargs').argv; // Aca guardo el argumento que paso por consola.
const Logger = require('./loggerFunction');

const envJSON = require('./env.config.json');
var node_env = process.env.Node_ENV || 'Logger';
var path = envJSON[node_env].PATH; // Nombre del archivo que voy a buscar/crear.

let timeString = new Date().toJSON(); // Fecha y hora cambiados a string.
let argumentMsg = argv.msg; // Mensaje por consola.
let msg = argumentMsg.concat(" ", timeString); // Concateno mi msj por consola y la fecha, hora y segundos.

Logger.fileExists(path, msg);