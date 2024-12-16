import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({

    
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true,
        
    },
    requirments:[{
        type:String,
        
    }],
    salary:{
        type:Number,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    jobType:{
        type:String,
        required:true
    },
    position:{
        type:Number,
        required:true
    },
    company:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"company"
    },
    created_by:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"User"
    },
    application:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Application"
    }

    

},{timestamps:true})

export const Job = mongoose.model("Job",jobSchema)