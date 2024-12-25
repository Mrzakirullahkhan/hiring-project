import mongoose, { mongo } from "mongoose";

const companyModelSchema = new mongoose.Schema({

    
    name:{
        type:String,
        required:true,
        unique:true
    },
    description:{
        type:String,
        
        
    },
    website:{
        type:String,
    },
    location:{
        type:String,
    },
    logo:{
        type:String
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    }



    

},{timestamps:true})

export const Company = mongoose.model("Company",companyModelSchema)