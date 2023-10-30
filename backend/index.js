import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoute from './Routes/auth.js'
import userRoute from './Routes/user.js'
import doctorRoute from './Routes/doctor.js'
import reviewRoute from './Routes/review.js'




dotenv.config()
const app = express()
const port = process.env.PORT || 8000

const corsOptions = {
    origin:true
}


app.get('/', (req,res)=>{
    res.send('API is working')
})


//database console
mongoose.set('strictQuery', false)
const connectDB = async() => {
    try{
        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser:true,
            useUnifiedTopology: true,
        })

        console.log('mongodb is connected')
    }catch(err){
        console.log('mongodb is not connected')
    }
}

///middleware
app.use(express.json())
app.use(cookieParser())
app.use(cors(corsOptions))
app.use('/api/v1/auth', authRoute)//domin//api
app.use('/api/v1/users', userRoute)//domin//api
app.use('/api/v1/doctors', doctorRoute)//domin//api
app.use('/api/v1/reviews', reviewRoute)


app.listen(port, ()=>{
    connectDB();
    console.log("Server is running on port" + port);
})