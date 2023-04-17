const jwt = require('jsonwebtoken');
export default function Handler(req,res){
    if(req.method === "GET"){
        const { authToken } = req.cookies;
        console.log(authToken);
        const secret = process.env.JWT_SECRET;
        
        try{
            const decoded = jwt.verify(authToken, secret);
            res.status(200).json({ auth: true })
        }
        catch(err){
            console.log(err);
            res.status(400).json({ auth: false })
        }
    }
}