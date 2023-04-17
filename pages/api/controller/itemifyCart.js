//import { FindManyItem, FindOneItem } from "../model/itemSchema"
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();
const ItemifyCart = async(req,res)=>{
    try{
        let totalData = [];
        const itemsInCart = req.body.data.data.items;
        console.log(itemsInCart)
        for (const item of itemsInCart) {
            const data = await prisma.Item.findUnique({
              where: {
                serial: item,
              },
            });
            totalData.push(data);
          }
        
        //console.log(totalData);
        res.status(200).json({items:totalData});
        
    }
    catch(err){ 
        console.log(err);
        res.status(500).json({err});
    }
}
module.exports = {ItemifyCart};