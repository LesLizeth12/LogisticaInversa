class Boleta{
    static tableName = 'boleta';
    constructor(id, bolEmpId, bolUsuarioId,bolGratificacion,bolTotal,estado){
        this.id = id;
        this.bolEmpId = bolEmpId;
        this.bolUsuarioId = bolUsuarioId;
        this.bolGratificacion = bolGratificacion;
        this.bolTotal = bolTotal;
        this.estado = estado;
    }
}
module.exports = Boleta;