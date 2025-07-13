const empleadoRepository = require('../repositories/EmpleadoRepository');

class EmpleadoService{
    getAllEmpleados(){
        return empleadoRepository.findAll();
    }
    getEmpleadoById(id){
        return empleadoRepository.findById(id);
    }
    createEmpleado(empleadoData){
        return empleadoRepository.create(empleadoData);
    }
    updateEmpleado(id, empleadoData){
        return empleadoRepository.update(id, empleadoData);
    }
    deleteEmpleado(id){
        return empleadoRepository.delete(id);
    }
    restoreEmpleado(id){
        return empleadoRepository.restore(id);
    }
}
module.exports=new EmpleadoService();