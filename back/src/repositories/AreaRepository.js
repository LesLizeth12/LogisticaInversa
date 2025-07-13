const CrudRepository = require('../lib/crudRepository');
const Area = require('../models/Area');

class AreaRepository extends CrudRepository{
    constructor(){
        super(Area);
    }
}
module.exports = new AreaRepository();