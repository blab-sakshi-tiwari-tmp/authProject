
import { error, log } from 'console';
import type { NextApiRequest, NextApiResponse } from 'next'
import jwt from 'jsonwebtoken';
import database from '../../data/users.json'
const KEY="dffnhbjsnjbfhewefwcew"
let role;
export default function login(req:NextApiRequest,res:NextApiResponse){
  if(!req.body){
    res.statusCode=400,
    res.end('error')
    return
  }
  const {email,password}=req.body;
  console.log(email," ",password);

  try{
    database.data.map((user)=>{
      // console.log(user);

      if(email===user.useremail && password===user.userpassword){
        const {useremail,userpassword,userrole}=user
        console.log(userrole," ",useremail);

        role=userrole
        console.log('role-',role);

        res.json({
          token:jwt.sign({
            email:email,
            role:userrole,
            check:email===useremail && password===userpassword
          },KEY)
        })
      }
    })  
    throw new Error('incorrect email or password')
  }catch (err:any) {
    res.json(err?.message);
    // expected output: "Ooopsies!"
  }

}