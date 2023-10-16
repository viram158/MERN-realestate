import user from '../models/user.model.js'
import bcryptjs from 'bcryptjs'
export const signup = async (req,res)=>{
 const {username,email,password} =  req.body ;
 const hashPassword = bcryptjs.hashSync(password ,10)
 const newuser = new user({username,email,password:hashPassword})
 try{
   await newuser.save()
   res.status(201).json({message:"user created successfully!"})
 }
 catch(error){
  res.status(500).json(error.message)
 }
}