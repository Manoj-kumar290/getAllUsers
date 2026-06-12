const express=require('express')
const dotenv=require('dotenv');
const connectdb = require('./config/db');
const authRoutes=require('./routes/authRoutes')
const cookieParser=require('cookie-parser')
const cors=require('cors')
dotenv.config();

const app=express();
connectdb();

// middlewares
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:5173", // Frontend URL
    credentials: true
  })
);



// routes
app.use('/auth',authRoutes)


const port=process.env.PORT;


app.listen(port,()=>{
    console.log(`server is listen on port ${port}`)
})