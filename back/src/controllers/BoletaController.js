const express = require('express');
const boletaService=require('../services/BoletaService');
const router=express.Router();

router.get('/',async(req,res)=>{
    const boletas=await boletaService.getAllBoletas();
    res.json(boletas);
});

router.get('/:id/',async(req,res)=>{
    const boleta=await boletaService.getBoletaById(req.params.id);
    if(boleta){
        res.json(boleta);
    }else{
        res.status(404).json({message:'boleta no found'});
    }
});

router.post('/',async(req,res)=>{
    const newBoleta=await boletaService.createBoleta(req.body);
    res.status(201).json(newBoleta);
});

router.put('/:id',async(req,res)=>{
    const updateBoleta=await boletaService.updateBoleta(req.params.id,req.body);
    if(updateBoleta)
        res.status(201).json(updateBoleta);
    else
    res.status(404).json({message:'Boleta not updated'});
});

router.delete('/:id',async(req,res)=>{
    const deletedBoleta=await boletaService.deleteBoleta(req.params.id);
    if(deletedBoleta){
        res.status(204).send();
    }else{
        res.status(404).json({message:'Boleta dont delete'});
    }
});

router.put('/restore/:id',async(req,res)=>{
    const restoredBoleta=await boletaService.restoreBoleta(req.params.id);
    if(restoredBoleta){
        res.status(204).send();
    }else{
        res.status(404).json({message:'Boleta dont restore'});
    }
});

module.exports=router;