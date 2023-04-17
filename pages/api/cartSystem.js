import GetCart from "./controller/getCart"
import RemoveCart from "./controller/removeCart"
export default function Handler(req,res){
    if (req.method === 'POST') {
        const instruction = req.body.instruction;
        if(instruction === "remove"){
            // remove the whole cart
            console.log("add remove function")
            RemoveCart(req,res)
        }
        if(instruction === "update"){
            // update the cart
        }
        if(instruction === "go"){
            // proceed to checkout
        }
    }
    if (req.method === 'GET') {
        GetCart(req,res)
    }
}