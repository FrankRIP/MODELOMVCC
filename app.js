const express = require('express');
const log = require('morgan');
const app = express();
const bodyParser = require('body-parser');
const path = require ('path');
const mongoose = require('mongoose');

const indexRoutes = require('./routes/index.js');
//const { ENGINE_METHOD_ALL } = require('constants');

//Escuchar servidor
app.set('port', process.env.PORT||3000);

//se mandan llamar las vistas
app.set ('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//conexion a base de datos
mongoose.connect('mongodb+srv://frankdb:171298@cluster0.seiw3.mongodb.net/iotdb?retryWrites=true&w=majority')
.then(bd => console.log('BD se conecto')).catch(err=>console.log(err));

//middleware
app.use(log('dev'));
app.use(bodyParser.urlencoded({extended: false}));

//Rutas
app.use('/',indexRoutes);


app.listen(app.get('port'), () =>{
    console.log('Servidor Funcionanddo en el Puerto', app.get('port'))
});
