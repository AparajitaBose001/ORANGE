const jwt = require('jsonwebtoken');


export default function handler(req, res) {
    if( req.method === "GET" ){
        const { user } = req.cookies;
        console.log(user);
        
        try{
            const secret = process.env.JWT_SECRET;
            const decoded = jwt.verify(user, secret);
            console.log(decoded);
            if(decoded){
                res.status(200).json({ auth: true, data:decoded })
            }
        }
        catch(err){
            //console.log(err);
            res.status(400).json({ auth: false })
        }
        
            
        
    }
  }
  