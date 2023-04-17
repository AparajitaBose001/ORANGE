import { v4 as uuidv4 } from 'uuid';
const {createCustomer, findCustomer, createAdmin, findAdmin} = require('../model/authSchema');
const CustomerSignup = async(req,res)=>{
    const body = req.body;
    const payload = {
        ...body.push,
        username:uuidv4().toString(),
        name:`${req.body.push.firstname} ${req.body.push.lastname}`
    };
    const data = {
        username: payload.username,
        email: payload.email,
        password: payload.password,
        firstName: payload.firstname,
        lastName: payload.lastname,
        address: payload.address,
    }
    try{
        await createCustomer(data)
        .then((result)=>{ 
            if(result){
                res.status(226).json({ message: 'signup created already', route:"/login" })
            }
            if(!result) {res.status(201).json({ message: 'signup created', route:"/login" })}
        })
        .catch((err)=>{ 
            console.log(err)
            res.status(226).json({ message: 'signup created already', route:"/login" })
        });
    }
    catch(err){ 
        console.log("false")
        console.log(err);
        res.status(500).json({ message: 'signup failed', route:"/signup" })
    }
    
}
module.exports = CustomerSignup;