const express = require('express');
const areaService=require('../services/AreaService');
const router=express.Router();

router.get('/',async(req,res)=>{
    const areas=await areaService.getAllAreas();
    res.json(areas);
});

router.get('/:id/',async(req,res)=>{
    const area=await areaService.getAreaById(req.params.id);
    if(area){
        res.json(area);
    }else{
        res.status(404).json({message:'area no found'});
    }
});

router.post('/',async(req,res)=>{
    const newArea=await areaService.createArea(req.body);
    res.status(201).json(newArea);
});

router.put('/:id',async(req,res)=>{
    const updateArea=await areaService.updateArea(req.params.id,req.body);
    if(updateArea)
        res.status(201).json(updateArea);
    else
    res.status(404).json({message:'Area not updated'});
});

router.delete('/:id',async(req,res)=>{
    const deletedArea=await areaService.deleteArea(req.params.id);
    if(deletedArea){
        res.status(204).send();
    }else{
        res.status(404).json({message:'Area dont delete'});
    }
});

router.put('/restore/:id',async(req,res)=>{
    const restoredArea=await areaService.restoreArea(req.params.id);
    if(restoredArea){
        res.status(204).send();
    }else{
        res.status(404).json({message:'Area dont restore'});
    }
});

module.exports=router;