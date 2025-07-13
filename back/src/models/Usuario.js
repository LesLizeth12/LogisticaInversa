class Usuario{
    static tableName = 'usuario';
    constructor(id, usuarioNom, usuarioPass,usuarioEmpId,usuarioTipoId,estado){
        this.id = id;
        this.usuarioNom = usuarioNom;
        this.usuarioPass = usuarioPass;
        this.usuarioEmpId = usuarioEmpId;
        this.usuarioTipoId = usuarioTipoId;
        this.estado = estado;
    }
}
module.exports = Usuario;