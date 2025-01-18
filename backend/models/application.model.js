import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema({

    
    job:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Job",
        required:true
    },
    applicant:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"User"
        
    },
    status:{
        type:String,
        enum:["pending","accepted","rejected"],
        default:"pending"
    },
    

},{timestamps:true})


export const application = mongoose.model("application",applicationSchema)
// export default application;