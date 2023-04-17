import { getCart,DeleteCart } from '../model/cartSchema';
const jwt = require('jsonwebtoken');
const RemoveCart = (req,res)=>{
    const cookie = req.headers.cookie;
    const purifiedCookie = cookie.split("=")[1];
    const filetered = purifiedCookie.split(";");
    const secret = process.env.JWT_SECRET;
    const decoded = jwt.verify(filetered[0], secret);
    console.log(decoded);
    getCart({
        username:decoded.id
    })
    .then(data=>{
        console.log(data)
    })
    .catch(err=>console.log(err))

    DeleteCart({
        username:decoded.id.toString()
    })
    .then(data=>{
        res.status(200).json({ data: data })
    })
    .catch(err=>console.log(err))
    
}
module.exports = RemoveCart;