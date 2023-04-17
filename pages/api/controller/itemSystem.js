//import { createCustomer, DeleteCustomer, findCustomer, FindAllCustomer } from '../model/authSchema';
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();
const ItemSystem = async (req, res) => {
    const instruction = req.body.instruction;
    console.log(req.body);
    if(instruction === 'getAll'){
        // get all from db
        try{
            const user = await prisma.Item.findMany();
            res.status(200).json(user);
        }
        catch(err){
            console.log(err);
            
        }
    }
    if(instruction === 'getOne'){
        // get one from db
        console.log(2)
        res.status(200).json({test:"ok"});
    }
    if(instruction === 'delete'){
        // remove from db
        const userID = req.body.id;
        try{
            const user = await prisma.Item.delete({where: {serial: userID,} })
            res.status(200).json({test:"ok"});
        }
        catch(err){ 
            console.log(err)
        }
        res.status(200).json({test:"ok"});
    }
    if(instruction === 'update'){
        // update in db
        console.log(4)
    }
    if(instruction === 'create'){
        // create in db
        console.log(5)
        
    }
}
module.exports = ItemSystem;