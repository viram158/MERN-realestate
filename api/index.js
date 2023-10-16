import express from 'express'
import mongoose from 'mongoose';
import userRouter from './routes/user.route.js' 
import userAuth from './routes/auth.route.js'
mongoose
.connect("mongodb://127.0.0.1:27017/Mern-estate").then(()=>{
    console.log("connected to mongodb")
}).catch((err)=>{
console.log(err)
})
const app = express();
app.use(express.json())

app.listen(3000,()=>{
    console.log("Server is live!!")
})

app.use('/api/routes',userRouter)
app.use('/api/auth',userAuth)