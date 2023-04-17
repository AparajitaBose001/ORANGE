const jwt = require('jsonwebtoken');
const Admin = (req,res)=>{
    const data = {
        id: 1,
        name: "admin",
        email: "admin@localhost",
        password: "admin",
    }
    const {email, password} = (req.body.push);
    if(email === "admin@localhost" && password ==="admin"){
        const secret = process.env.JWT_SECRET;
        const token = jwt.sign({ email: data.email, id: data.id }, secret, { expiresIn: '9h' });
        res.setHeader('Set-Cookie', `authToken=${token}; path=/; expires=${new Date(Date.now() + 1000 * 60 * 60 * 24 * 7).toUTCString()}; httpOnly=true; SameSite=Strict; Secure=true`);
        res.status(200).json({ name: 'admin', status:"success", token:token })
    }
    else res.status(401).json({ name: 'admin' })
}
module.exports = Admin;