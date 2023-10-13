import express from 'express'
import mongoose from 'mongoose';
mongoose
.connect("mongodb://127.0.0.1:27017/Mern-estate").then(()=>{
    console.log("connected to mongodb")
}).catch((err)=>{
console.log(err)
})
const app = express();

app.listen(3000,()=>{
    console.log("Server is live!!")
})