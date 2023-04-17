const { findCustomer } = require('../model/authSchema');
const jwt = require('jsonwebtoken');
const CustomerLogin = async(req,res)=>{
    const postEmail = req.body.push.email;
    const postPassword = req.body.push.password;
    try{
        await findCustomer({
            email: postEmail.toString()
        })
        .then((result)=>{
            console.log(result)
            if(result.password===postPassword){
                const token = jwt.sign({id: result.username, email: result.email, name:result.firstname, userType:"customer"}, process.env.JWT_SECRET, {expiresIn: '3h'});
                res.setHeader('Set-Cookie', `user=${token}; path=/; expires=${new Date(Date.now() + 1000 * 60 * 60 * 24 * 7).toUTCString()}; httpOnly=true; SameSite=Strict; Secure=true`);
                res.status(200).json({login:true, route:"/"})
            }
            else{ res.status(200).json({msg: "01", stage:"1145", result:"wrong password"}) }
        })
        .catch(err=>console.log(err))
    }
    catch(err){ res.status(200).json({msg: "01", stage:"1146"}) }
    
}
module.exports = CustomerLogin;