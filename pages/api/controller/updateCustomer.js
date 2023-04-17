const { UpdateCustomer } = require('../model/authSchema');

const UpdateCustomers = async(email,dataset)=>{

        try{
            const data = await UpdateCustomer(email,dataset);
            console.log(data)
            return data;
        }
        catch(err){
            console.log(err);
            return false;
        }
}
module.exports = UpdateCustomers;