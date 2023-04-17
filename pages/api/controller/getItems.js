import { FindManyItem, FindOneItem } from "../model/itemSchema"
const getItems = async(req,res)=>{
    try{
        const items = await FindManyItem({})
        res.status(200).json(items);
    }
    catch(err){ 
        console.log(err);
        res.status(500).json({err});
    }
}
const getOneItem = async(req,res)=>{
    try{
        const items = await FindOneItem({serial:req.query.id})
        res.status(200).json(items);
    }
    catch(err){ 
        console.log(err);
        res.status(500).json({err});
    }
}

module.exports = {getItems, getOneItem};
