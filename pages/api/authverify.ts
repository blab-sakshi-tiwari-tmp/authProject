import jwt from 'jsonwebtoken';
import { NextApiRequest, NextApiResponse } from 'next';


function Authverify(req:NextApiRequest,res:NextApiResponse) {
    const token= req?.headers?.authorization
const KEY="dffnhbjsnjbfhewefwcew"
    const decoded = jwt.verify(token || "", KEY);
    console.log("decode-",{decoded})
    return res.json(decoded)
}

export default Authverify

