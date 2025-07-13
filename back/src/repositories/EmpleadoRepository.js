const CrudRepository = require('../lib/crudRepository');
const Empleado = require('../models/Empleado');

class EmpleadoRepository extends CrudRepository{
    constructor(){
        super(Empleado);
    }
}
module.exports = new EmpleadoRepository();