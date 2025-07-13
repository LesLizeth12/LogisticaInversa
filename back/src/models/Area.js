class Area{
    static tableName = 'area';
    constructor(id, areaNom, areaSalario, estado){
        this.id = id;
        this.areaNom = areaNom;
        this.areaSalario = areaSalario;
        this.estado = estado;
    }
}
module.exports = Area;