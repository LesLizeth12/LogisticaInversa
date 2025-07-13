const express = require('express');
const empleadoService=require('../services/EmpleadoService');
const router=express.Router();

router.get('/',async(req,res)=>{
    const empleados=await empleadoService.getAllEmpleados();
    res.json(empleados);
});

router.get('/:id/',async(req,res)=>{
    const empleado=await empleadoService.getEmpleadoById(req.params.id);
    if(empleado){
        res.json(empleado);
    }else{
        res.status(404).json({message:'empleado no found'});
    }
});

router.post('/',async(req,res)=>{
    const newEmpleado=await empleadoService.createEmpleado(req.body);
    res.status(201).json(newEmpleado);
});

router.put('/:id',async(req,res)=>{
    const updateEmpleado=await empleadoService.updateEmpleado(req.params.id,req.body);
    if(updateEmpleado)
        res.status(201).json(updateEmpleado);
    else
    res.status(404).json({message:'Empleado not updated'});
});

router.delete('/:id',async(req,res)=>{
    const deletedEmpleado=await empleadoService.deleteEmpleado(req.params.id);
    if(deletedEmpleado){
        res.status(204).send();
    }else{
        res.status(404).json({message:'Empleado dont delete'});
    }
});

router.put('/restore/:id',async(req,res)=>{
    const restoredEmpleado=await empleadoService.restoreEmpleado(req.params.id);
    if(restoredEmpleado){
        res.status(204).send();
    }else{
        res.status(404).json({message:'Empleado dont restore'});
    }
});

module.exports=router;