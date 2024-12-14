import express from "express"
import cookieParser from "cookie-parser";
import cors from "cors"

const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser())
const corsOptions ={
    origin:"http//localhost:5173",
    Credentials:true
}
app.get("/home",(req,res)=>{
        return res.status(200).json({
            message:"i am coming from backing",
            success:true
        })
})
app.use(cors(corsOptions))

const PORT = 3000;
app.listen(PORT,()=>{
    console.log(`server running on PORT ${PORT}`)
})
