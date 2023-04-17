const Admin          = require("./controller/admin");
const CustomerLogin  = require("./controller/login");
const CustomerSignup = require("./controller/signup");
export default function handler(req, res) {
    if (req.method === 'POST') {
      // Process a POST request
      const url = req.body.url;
      if(url ==="/signup"){
        //res.status(200).json({ name: 'signup' })
        CustomerSignup(req,res);
      }
    if(url ==="/login"){
        //res.status(200).json({ name: 'login' })
        CustomerLogin(req,res);
      }
    if(url ==="/admin"){
        //res.status(200).json({ name: 'admin' })
        Admin(req,res);
      }
    }
    else{
        res.status(400).json({ name: 'John Doe' })
    }
  }
  