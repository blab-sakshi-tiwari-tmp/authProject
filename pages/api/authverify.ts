import jwt from 'jsonwebtoken';
import { NextApiRequest, NextApiResponse } from 'next';


function Authverify(req:NextApiRequest,res:NextApiResponse) {
    
    if(req?.headers?.authorization!='undefined'){
    const token:string| undefined = req?.headers?.authorization;
    console.log("token-----------",token);
    
    const newtoken=token?.split(" ")[1]
    console.log("token:-",newtoken);
const KEY="dffnhbjsnjbfhewefwcew"
if(newtoken){
    const decoded = jwt.verify(newtoken || "",KEY, function(err, decoded:any) {
        if (err) res.status(500).send(err)
        //req.username = decoded.username;
        console.log(decoded)
        
      })
    // console.log("decode-",{decoded})
     res.json(decoded)
    }}
    res.end()
}

export default Authverify