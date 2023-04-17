const { findCustomer } = require('../model/authSchema');

const GetCustomer = async(email)=>{

        try{
            const data = await findCustomer({email:email});
            console.log(data)
            return data;
        }
        catch(err){
            console.log(err);
            return false;
        }
}
module.exports = GetCustomer;