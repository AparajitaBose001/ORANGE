import { getCart } from '../model/cartSchema';
const jwt = require('jsonwebtoken');
const GetCart = (req,res)=>{
    const {user} = req.cookies;
    const secret = process.env.JWT_SECRET;
    const decoded = jwt.verify(user, secret);
    console.log(decoded);
    getCart({
        username:decoded.id
    })
    .then(data=>{
        res.status(200).json({ data: data })
    })
    .catch(err=>console.log(err))
}
module.exports = GetCart;