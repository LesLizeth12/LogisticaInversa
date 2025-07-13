const CrudRepository = require('../lib/crudRepository');
const Boleta = require('../models/Boleta');

class BoletaRepository extends CrudRepository{
    constructor(){
        super(Boleta);
    }
}
module.exports = new BoletaRepository();