import { getCart, createCart, updateCart } from '../model/cartSchema';
const jwt = require('jsonwebtoken');
const addToCart = (req,res)=>{
    const cookie = req.headers.cookie;
    const purifiedCookie = cookie.split("=")[1];
    const filetered = purifiedCookie.split(";");
    const secret = process.env.JWT_SECRET;
    const decoded = jwt.verify(filetered[0], secret);
        const data1 = {
            username:decoded.id,
            items: req.body.products,
            total: req.body.price,
            color: req.body.color,
            quantity: [req.body.quantity]
        }
        console.log(data1)
        // fetch if any cart exists, if not create a new cart
        
        getCart({
            username:decoded.id
        })
        .then(data=>{
            if(data){
                // update the cart
               console.log(data,"that")
                updateCart(data1)
                .then(data=>{console.log(data)})
                .catch(err=>console.log(err))
            }
            else{
                // create a new cart
                console.log(data,"this")
                createCart(data1)
                .then(data=>{console.log(data)})
                .catch(err=>console.log(err))
            }
        })
        .catch(err=>console.log(err))
        
        // if cart exists, update the cart

    

}
module.exports = addToCart;