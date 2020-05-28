// Requires
var express = require('express');
var mongoose = require('mongoose');


// Inicializar variables
var app = express();


// Conexion a la db
mongoose.connection.openUri('mongodb://Localhost:27017/hospitalDB', (err, res) => {
    if (err) throw err;
    console.log('DataBase: \x1b[32m%s\x1b[0m', 'online');
});


// Rutas
app.get('/', (req, res, next) => {
    res.status(200).json({
        ok: true,
        mensaje: 'Peticion realizada correctamente'
    });
});


// Escuchar peticiones
app.listen(3000, () => {
    console.log('Express Server Run Port 3000: \x1b[32m%s\x1b[0m', 'online');
});