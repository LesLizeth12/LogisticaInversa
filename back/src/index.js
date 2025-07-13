require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const areaController = require('./controllers/AreaController');
const empleadoController=require('./controllers/EmpleadoController');
const tipoUsuarioController=require('./controllers/TipoUsuarioController');
const usuarioController=require('./controllers/UsuarioController');
const boletaController=require('./controllers/BoletaController');


const app =express();
app.use(express.json());
app.use(helmet());

app.use(helmet.referrerPolicy({
    policy: 'strict-origin-when-cross-origin'
}));

app.use((req, res,next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE,OPTIONS');
    next();
})

app.use('/api/area',areaController);
app.use('/api/empleado',empleadoController);
app.use('/api/tipoUsuario',tipoUsuarioController);
app.use('/api/usuario',usuarioController);
app.use('/api/boleta',boletaController);


const port=process.env.port || 3000;

app.listen(port,()=>{
    console.log(`servidor corriendo en http://localhost:${port}`); //AltGr+cierre de llave=comilla simple al reves
})
