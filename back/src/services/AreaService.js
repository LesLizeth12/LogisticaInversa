const areaRepository = require('../repositories/AreaRepository');

class AreaService{
    getAllAreas(){
        return areaRepository.findAll();
    }
    getAreaById(id){
        return areaRepository.findById(id);
    }
    createArea(areaData){
        return areaRepository.create(areaData);
    }
    updateArea(id, areaData){
        return areaRepository.update(id, areaData);
    }
    deleteArea(id){
        return areaRepository.delete(id);
    }
    restoreArea(id){
        return areaRepository.restore(id);
    }
}
module.exports=new AreaService();