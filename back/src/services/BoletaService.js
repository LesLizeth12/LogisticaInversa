const boletaRepository = require('../repositories/BoletaRepository');

class BoletaService{
    getAllBoletas(){
        return boletaRepository.findAll();
    }
    getBoletaById(id){
        return boletaRepository.findById(id);
    }
    createBoleta(boletaData){
        return boletaRepository.create(boletaData);
    }
    updateBoleta(id, boletaData){
        return boletaRepository.update(id, boletaData);
    }
    deleteBoleta(id){
        return boletaRepository.delete(id);
    }
    restoreBoleta(id){
        return boletaRepository.restore(id);
    }
}
module.exports=new BoletaService();