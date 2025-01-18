import express from "express"
import cookieParser from "cookie-parser";
import cors from "cors"
import dotenv from "dotenv"
import connectDB from "./utils/db.js";
import userRoute from "../backend/routes/userRoutes.js"
import companyRoute from "../backend/routes/companyRoutes.js"
import jobRoute from "../backend/routes/jobRoutes.js"
import applicationRoute from "../backend/routes/applicationRoute.js"



dotenv.config({})
const app = express();

// middleware
app.use(express.json());

app.use(express.urlencoded({extended:true}));
app.use(cookieParser())

const corsOptions ={
    origin:"http://localhost:5173",
    credentials:true
}

app.use(cors(corsOptions))

const PORT = process.env.PORT|| 3000;
connectDB()

// api
app.use("/api/v1/user",userRoute)
app.use("/api/v1/company",companyRoute)
app.use("/api/v1/job",jobRoute)
app.use("/api/v1/application",applicationRoute)


app.listen(PORT,()=>{
    console.log(`server running on PORT ${PORT}`)
})

"http://localhost:8000/api/v1/user"