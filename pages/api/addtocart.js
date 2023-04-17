import addToCart from './controller/addtocart.js'
const jwt = require('jsonwebtoken');
export default function Handler(req,res){
    if (req.method === 'POST') {
    addToCart(req,res)
    res.json({status:"ok"})
    }
    if (req.method === 'GET') {
        res.json({status:"ok"})
    }
}