class Empleado{
    static tableName = 'empleado';
    constructor(id, empDni, empApePat,empApeMat,empNombres,empGenero,empCorreo,empAreaId,empContrato,empFecInicio,empFecFin,empJornada,empFecNac,estado){
        this.id = id;
        this.empDni = empDni;
        this.empApePat = empApePat;
        this.empApeMat = empApeMat;
        this.empNombres = empNombres;
        this.empGenero = empGenero;
        this.empCorreo = empCorreo;
        this.empAreaId = empAreaId;
        this.empContrato = empContrato;
        this.empFecInicio =empFecInicio;
        this.empFecFin = empFecFin;
        this.empJornada = empJornada;
        this.empFecNac = empFecNac;
        this.estado = estado;
    }
}
module.exports = Empleado;